import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ChatMessage } from '../models/chat.model';

@Injectable()
export class ChatService {

    readonly getMessagesApi = environment.getChatMessagesApi;
    readonly putMessageApi = environment.setChatMessageApi;

    private chats: BehaviorSubject<ChatMessage[]>;
    private chats$: Observable<ChatMessage[]>;

    constructor(private http: HttpClient) {
        this.chats = new BehaviorSubject<ChatMessage[]>([]);
        this.chats$ = this.chats.asObservable();
    }

    public createChat(message: ChatMessage): Observable<any>  {
        return this.http.post(this.putMessageApi, 
            Object.assign({}, message, { timestamp: new Date() }));
    }

    public getChats(chatRoom: string): Observable<ChatMessage[]> {
        this.callCloudChats(chatRoom);
        return this.chats$;
    }

    private callCloudChats(chatRoom: string): void {
        this.http.get<ChatMessage[]>(`${this.getMessagesApi}?room=${chatRoom}`)
            .toPromise().then(messages => {
                this.chats.next(messages);
            });
    }
}
