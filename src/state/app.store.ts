import { Action } from 'redux';
import { AppActions } from './app.actions';

export interface IAppState{
    count: number
};

export const initialState = {
    count: 0
};

export function rootReducer(lastState: IAppState, action: Action) {
    switch(action.type) {

        case AppActions.INCREMENT: return { count: lastState.count + 1 }
        case AppActions.DECREMENT: return { count: lastState.count - 1 }
    }
    return lastState;
}