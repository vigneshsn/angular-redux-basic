import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { AppActions } from 'src/state/app.actions';
import { IAppState, initialState, rootReducer } from 'src/state/app.store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [ AppActions ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, initialState);
  }
}
