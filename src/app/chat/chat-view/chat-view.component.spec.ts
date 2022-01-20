import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ChatService } from '../../services/chat.service';
import { RegisterService } from '../../services/register.service';
import { ConversationComponent } from '../conversation/conversation.component';
import { RegisterChatterViewComponent } from '../register-chatter-view/register-chatter-view.component';
import { ChatViewComponent } from './chat-view.component';

describe('ChatViewComponent', () => {
  let component: ChatViewComponent;
  let fixture: ComponentFixture<ChatViewComponent>;
  let chatService: jasmine.SpyObj<ChatService>;
  let regService: jasmine.SpyObj<RegisterService>;


  beforeEach(async(() => {
    const regSpy = jasmine.createSpyObj('RegisterService', ['getRegistration']);
    const chatSpy = jasmine.createSpyObj('ChatService', ['getChats', 'createChat']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      providers: [
        {
          provide: RegisterService,
          useValue: regSpy
        },
        {
          provide: ChatService,
          useValue: chatSpy
        }
      ],
      declarations: [
        ChatViewComponent,
        RegisterChatterViewComponent,
        ConversationComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    regService = TestBed.get(RegisterService);
    regService.getRegistration.and.returnValue(of({ screenName: 'samiam', selectedChatRoom: 'test room' }));

    chatService = TestBed.get(ChatService);
    chatService.getChats.and.returnValue(of(
      [
        { message: 'test message', screenName: 'samiam', timestamp: new Date() }
      ]
    ));
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render and display the returned Chat Room', fakeAsync(() => {
    fixture = TestBed.createComponent(ChatViewComponent);
    component = fixture.componentInstance;
    tick();
    fixture.detectChanges();

    expect(regService.getRegistration).toHaveBeenCalled();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('test room');

    tick();
    fixture.detectChanges();
    expect(chatService.getChats).toHaveBeenCalled();

    tick(1000);
    fixture.destroy();

  }));

  it('should execute a chat message', () => {
    fixture = TestBed.createComponent(ChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const input = { message: 'test input message' };
    component.chatMessage = input;

    component.registerChatter();
    expect(chatService.createChat).toHaveBeenCalledWith(input);
  });

});
