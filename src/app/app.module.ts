import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { ChatModule } from './chat/chat.module';
import { RegisterChatterViewComponent } from './chat/register-chatter-view/register-chatter-view.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RegistrationEffects } from './effects/registration.effects';
import { EffectsModule } from '@ngrx/effects';
import { ChatEffects } from './effects/chat.effects';


// Added imports for routing
const routes: Routes = [
    { path: 'register', component: RegisterChatterViewComponent },
    { path: 'chat', component: ChatViewComponent }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        ChatModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([RegistrationEffects, ChatEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
