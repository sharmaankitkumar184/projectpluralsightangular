import { TestBed } from '@angular/core/testing';

import { APIKEYSInterceptor } from './api-keys.interceptor';

describe('APIKEYSInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      APIKEYSInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: APIKEYSInterceptor = TestBed.inject(APIKEYSInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
