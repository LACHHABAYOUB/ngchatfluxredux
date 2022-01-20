import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LoadChats, SaveChat } from 'src/app/actions/chat.actions';
import { LoadRegistration } from 'src/app/actions/registration.actions';
import { initialState } from 'src/app/reducers/chats.reducer';

import { ChatMessage } from '../../models/chat.model';
import { RegistrationChatter } from '../../models/registration.model';
import * as fromRoot from '../../reducers';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.component.html',
    styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {

    errorMsg = 'No Screen Name Registered. Please register a Screen Name';

    registration: RegistrationChatter;

    polling: Subscription;
    chatMessage: ChatMessage = initialState.chatToSave;
    chatMessages$: Observable<ChatMessage[]>;

    constructor(private store: Store<fromRoot.State>,
        private chatService: ChatService) { }

    ngOnInit() {

        const registration$ = this.store.pipe(
            select(fromRoot.getRegistartionState),
            map(
                (reg: RegistrationChatter) => {
                    console.log('Chat View Registration mapping', reg)
                    this.registration = reg;
                    this.chatMessage = reg ? { ...reg, chatRoom: reg.selectedChatRoom, screenName: reg.screenName } : { ...initialState.chatToSave };
                }
            ));

        this.chatMessages$ = this.store.pipe(select(fromRoot.getChatsState));

        this.polling = registration$.pipe(
            switchMap(() => timer(0, 60000).pipe(
                map(() =>
                    this.store.dispatch(new LoadChats(this.chatMessage.chatRoom))
                )
            ))).subscribe();

        this.store.dispatch(new LoadRegistration());
    }

    ngOnDestroy() {
        this.polling.unsubscribe();

        /* tslint:disable:no-console */
        console.info('destroying app and unsubscribing to registration');
    }

    registerChatter() {
        this.store.dispatch(new SaveChat(this.chatMessage));
        this.chatMessage.message = '';
    }

}
