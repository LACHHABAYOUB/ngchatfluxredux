import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { LoadRegistration, SaveRegistration } from 'src/app/actions/registration.actions';
import { availableChatRooms, RegistrationChatter } from '../../models/registration.model';
import * as fromRoot from '../../reducers';


@Component({
    selector: 'app-register-chatter-view',
    templateUrl: './register-chatter-view.component.html',
    styleUrls: ['./register-chatter-view.component.css']
})
export class RegisterChatterViewComponent implements OnInit, OnDestroy {

    chatRooms = availableChatRooms;

    registration: RegistrationChatter;
    registrationSubscription: Subscription;

    reg$: Observable<RegistrationChatter>;

    constructor(private store: Store<fromRoot.State>) { }

    ngOnInit() {
        this.reg$ = this.store.select(fromRoot.getRegistartionState);

        this.registrationSubscription = this.reg$.pipe(
            first(),
            map(reg => { this.registration = { ...reg }; }))
            .subscribe();

        this.store.dispatch(new LoadRegistration());
    }

    ngOnDestroy() {
        this.registrationSubscription.unsubscribe();
    }

    registerChatter() {
        console.log('Click')
        this.store.dispatch(new SaveRegistration(this.registration));
    }

}
