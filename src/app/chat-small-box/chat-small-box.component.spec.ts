import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSmallBoxComponent } from './chat-small-box.component';

describe('ChatSmallBoxComponent', () => {
  let component: ChatSmallBoxComponent;
  let fixture: ComponentFixture<ChatSmallBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSmallBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSmallBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
