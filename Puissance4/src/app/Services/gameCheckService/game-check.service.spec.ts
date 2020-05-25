import { TestBed } from '@angular/core/testing';

import { GameCheckService } from './game-check.service';

describe('GameCheckService', () => {
  let service: GameCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
