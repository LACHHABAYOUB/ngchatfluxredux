import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from '../services/services.module';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ConversationComponent } from './conversation/conversation.component';
import { RegisterChatterViewComponent } from './register-chatter-view/register-chatter-view.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ServicesModule
    ],
    declarations: [
        RegisterChatterViewComponent,
        ChatViewComponent,
        ConversationComponent
    ],
    exports: [
        RegisterChatterViewComponent,
        ChatViewComponent
    ]
})
export class ChatModule {}
