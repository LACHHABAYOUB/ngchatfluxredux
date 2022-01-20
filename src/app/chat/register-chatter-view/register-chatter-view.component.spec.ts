import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { RegisterService } from '../../services/register.service';
import { RegisterChatterViewComponent } from './register-chatter-view.component';

describe('RegisterChatterViewComponent', () => {
  let component: RegisterChatterViewComponent;
  let fixture: ComponentFixture<RegisterChatterViewComponent>;
  let registerService: jasmine.SpyObj<RegisterService>;

  beforeEach(async(() => {
    const registerSpy = jasmine.createSpyObj('RegisterService', ['getRegistration', 'updateRegistration']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RegisterChatterViewComponent],
      providers: [{ provide: RegisterService, useValue: registerSpy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    registerService = TestBed.get(RegisterService);
    registerService.getRegistration.and.returnValue(of({
      screenName: 'samiam',
      chatRoom: 'Stuff'
    }));

    fixture = TestBed.createComponent(RegisterChatterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with Registration', () => {

    fixture.whenStable().then(() => {
      let compiled = fixture.debugElement.query(By.css('#chat-room')).nativeElement;
      expect(compiled.textContent).toContain('Stuff');

      compiled = fixture.debugElement.query(By.css('#screen-name')).nativeElement;
      expect(compiled.value).toContain('samiam');
    });

    expect(registerService.getRegistration).toHaveBeenCalled();
  });

  it('should be able to execute a registration to chat', () => {

    const input = { screenName: 'test user', chatRoom: 'Mystic1-4U' };

    component.registration = input;
    component.registerChatter();

    expect(registerService.updateRegistration).toHaveBeenCalledWith(input);

  });

});
