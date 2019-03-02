import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing'
import { Subject } from 'rxjs';
import { IAppState } from 'src/state/app.store';
import { AppActions } from 'src/state/app.actions';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [NgReduxTestingModule],
      providers: [AppActions]
    }).compileComponents();

    MockNgRedux.reset();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-redux-basic'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-redux-basic');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-redux-basic!');
  });

  it('testing the count receives the value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const componentUnderTest: AppComponent = fixture.debugElement.componentInstance;

    //mock stub
    const countStub: Subject<number> = MockNgRedux.getSelectorStub<IAppState, number>('count');
    const expectedVal = [1, 2, 3, 2, 1];

    //drive those val through stub
    expectedVal.forEach(value => countStub.next(value));
    countStub.complete();

    let actualValues = [];
    componentUnderTest.count$.forEach(val =>actualValues.push(val));
    expect(actualValues).toEqual(expectedVal);
    // .toArray()
    // .subscribe(actualValues => expect(actualValues).toEqual(expectedVal),
    //     null,
    //     done);
  });

  it('testing the actions get dispatched when incremented', () => {
    const actionSpy = spyOn(MockNgRedux.mockInstance, 'dispatch');

    const fixture = TestBed.createComponent(AppComponent);
    const componentUnderTest: AppComponent = fixture.debugElement.componentInstance;

    componentUnderTest.increment();
    expect(actionSpy).toHaveBeenCalledWith({type: AppActions.INCREMENT});
  });
});
