import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/state/app.store';
import { AppActions } from 'src/state/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-redux-basic';

  @select() readonly count$: Observable<number>;
  countSubscription;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: AppActions) {
    //this.countSubscription = ngRedux.select<number>('count').subscribe(newCount => this.count = newCount);
  }

  increment() { this.ngRedux.dispatch(this.actions.increment()); }

  decrement() { this.ngRedux.dispatch(this.actions.decrement()); }

  // ngOnDestroy() {
  //   this.countSubscription.unsubscribe();
  // }
 
}
