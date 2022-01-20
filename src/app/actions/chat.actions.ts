import { Action } from '@ngrx/store';

import { ChatMessage } from '../models/chat.model';

export enum ChatActionTypes {
  LoadChats = '[Chat] Load Chats',
  LoadChatsSuccess = '[Chat] Load Chats Success',
  SaveChat = '[Chat] Save Chat',
  SaveChatSuccess = '[Chat] Save Chat Success'
}

export class LoadChats implements Action {
  readonly type = ChatActionTypes.LoadChats;
  constructor(public payload: string) { }
}

export class LoadChatsSuccess implements Action {
  readonly type = ChatActionTypes.LoadChatsSuccess;
  constructor(public payload: ChatMessage[]) { }
}

export class SaveChat implements Action {
  readonly type = ChatActionTypes.SaveChat;
  constructor(public payload: ChatMessage) { }
}

export class SaveChatSuccess implements Action {
  readonly type = ChatActionTypes.SaveChatSuccess;
  constructor(public payload: ChatMessage) { }
}

export type ChatActions = LoadChats | LoadChatsSuccess
  | SaveChatSuccess | SaveChat;
