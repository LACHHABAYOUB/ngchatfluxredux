import { ChatActions, ChatActionTypes } from '../actions/chat.actions';
import { ChatMessage } from '../models/chat.model';


export interface State {
  chats: ChatMessage[],
  chatToSave: ChatMessage
}

export const initialState: State = {
  chats: [],
  chatToSave: { isLoading: false, isSuccess: false, isError: false }
};

export function reducer(state = initialState, action: ChatActions): State {
  switch (action.type) {

    case ChatActionTypes.LoadChats: {
      return { ...state, chats: [] }
    }

    case ChatActionTypes.LoadChatsSuccess: {
      return { ...state, chats: action.payload }
    }

    case ChatActionTypes.SaveChat: {
      return {
        ...state,
        chatToSave: {
          ...action.payload,
          isLoading: true,
          isError: false,
          isSuccess: false
        }
      }
    }

    case ChatActionTypes.SaveChatSuccess: {
      return {
        ...state,
        chatToSave: {
          ...action.payload,
          isLoading: false,
          isError: false,
          isSuccess: true
        }
      }
    }

    default:
      return state;
  }
}

export const getChats = (state: State) => state.chats;

export const getChatToSave = (state: State) => state.chatToSave;
