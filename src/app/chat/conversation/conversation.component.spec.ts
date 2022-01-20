import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ConversationComponent } from './conversation.component';

describe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a chat message', () => {
    const input = [
      { message: 'my test message', timestamp: new Date(), screenName: 'samiam' },
      { message: 'my second test message', timestamp: new Date(), screenName: 'bob' }
    ];
    component.messages = input;

    fixture.detectChanges();
    const debug = fixture.debugElement;

    const compiled = debug.queryAll(By.css('.card-text'));
    expect(compiled[0].nativeElement.innerHTML).toContain('my test message');
    expect(compiled[1].nativeElement.innerHTML).toContain('my second test message');

  });

});
