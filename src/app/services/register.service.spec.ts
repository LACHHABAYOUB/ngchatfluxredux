import { inject, TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterService]
    });
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));

  it('should update, then get the expected registration', inject([RegisterService], (service: RegisterService) => {
    const expectation = { screenName: 'samiam', chatRoom: 'My Room' };
    service.updateRegistration(expectation);

    service.getRegistration().subscribe(result => {
      expect(result).toBe(expectation);
    });
  }));

});
