import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { filter, take } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ChatService } from './chat.service';

const chatMessage = {
  message: 'Test Message',
  timestamp: new Date(),
  screenName: 'samiam',
  chatRoom: 'Test Chat Room'
};

describe('ChatService', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService],
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));

  it('should execute XHR an and GET the expected Chats', inject([ChatService], (service: ChatService) => {
    const expected = [
      chatMessage
    ];
    const input = 'Test Chat Room';

    service.getChats(input).pipe(take(2), filter(res => res.length > 0)).subscribe(result => {
      expect(result).toBe(expected);
    });

    const testRequest = httpMock.expectOne(`${environment.getChatMessagesApi}?room=${input}`);
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(expected);

  }));

  it('should execute an XHR request to POST a chat message', inject([ChatService], (service: ChatService) => {
    const expected = [
      chatMessage
    ];
    const input = 'Test Chat Room';

    service.createChat(chatMessage);

    const testRequest = httpMock.expectOne(environment.setChatMessageApi);
    expect(testRequest.request.method).toBe('POST');
    testRequest.flush(expected);

  }));

});
