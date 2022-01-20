import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../models/chat.model';


@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {

    @Input() messages: ChatMessage[];

    constructor() { }

}
