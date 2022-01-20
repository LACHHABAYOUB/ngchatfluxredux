import { BaseModel } from './base.model';

export interface RegistrationChatter extends BaseModel {
    screenName?: string;
    selectedChatRoom?: string;
    isSuccess?: boolean
}

export const initialRegistration: RegistrationChatter = {
    screenName: '',
    isError: false,
    isSuccess: false,
    isLoading: false
};

export const availableChatRooms: string[] = ['Stuff', 'Fun with Taxes', 'Mystic1-4U'];
