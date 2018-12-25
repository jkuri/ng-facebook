import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSideComponent } from './chat-side/chat-side.component';
import { ChatSideUserItemComponent } from './chat-side-user-item/chat-side-user-item.component';
import { ChatSideSearchComponent } from './chat-side-search/chat-side-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatSideComponent,
    ChatSideUserItemComponent,
    ChatSideSearchComponent
  ],
  exports: [
    ChatSideComponent,
    ChatSideUserItemComponent
  ]
})
export class ChatModule { }
