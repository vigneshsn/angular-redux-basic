import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AppActions {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';

    increment(): Action {
        return {type: AppActions.INCREMENT};
    }

    decrement(): Action {
        return {type: AppActions.DECREMENT};
    }
}