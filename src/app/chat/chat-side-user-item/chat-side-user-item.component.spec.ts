import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSideUserItemComponent } from './chat-side-user-item.component';

describe('ChatSideUserItemComponent', () => {
  let component: ChatSideUserItemComponent;
  let fixture: ComponentFixture<ChatSideUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSideUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSideUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
