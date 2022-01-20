import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ChatService } from '../services/chat.service';
import { RegisterService } from '../services/register.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        RegisterService,
        ChatService
    ]
})
export class ServicesModule {}
