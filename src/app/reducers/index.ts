import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromChats from './chats.reducer';
import * as fromRegistration from './registration.reducer';

export interface State {
  chatState: fromChats.State,
  registrationState: fromRegistration.State
}

export const reducers: ActionReducerMap<State> = {
  chatState: fromChats.reducer,
  registrationState: fromRegistration.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getChatFeatureState = (state: State) => state.chatState;
export const getChatsState = createSelector(getChatFeatureState, fromChats.getChats);
export const getChatToSaveState = createSelector(getChatFeatureState, fromChats.getChatToSave);

export const getRegistrationFeatureState = (state: State) => state.registrationState;
export const getRegistartionState = createSelector(getRegistrationFeatureState, fromRegistration.getRegistration);

