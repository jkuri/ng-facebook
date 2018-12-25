import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSideSearchComponent } from './chat-side-search.component';

describe('ChatSideSearchComponent', () => {
  let component: ChatSideSearchComponent;
  let fixture: ComponentFixture<ChatSideSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSideSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
