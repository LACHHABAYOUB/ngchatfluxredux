import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { ChatActionTypes, LoadChats, SaveChat } from '../actions/chat.actions';
import { ChatService } from '../services/chat.service';


@Injectable()
export class ChatEffects {

  constructor(private actions$: Actions,
    private service: ChatService) { }

  @Effect()
  chats$: Observable<Action> = this.actions$.pipe(
    ofType(ChatActionTypes.LoadChats),
    mergeMap((action: LoadChats) =>
      this.service.getChats(action.payload).pipe(
        map(data => ({
          type: ChatActionTypes.LoadChatsSuccess,
          payload: data
        }))
      )
    )
  );

  @Effect()
  chatSave$: Observable<Action> = this.actions$.pipe(
    ofType(ChatActionTypes.SaveChat),
    mergeMap((action: SaveChat) =>
      this.service.createChat(action.payload).pipe(
        switchMap(() => this.service.getChats(action.payload.chatRoom).pipe(
          map(data => ({
            type: ChatActionTypes.SaveChatSuccess,
            payload: data
          })))
        )
      )
    )
  );

}
