import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-side-user-item',
  templateUrl: './chat-side-user-item.component.html',
  styleUrls: ['./chat-side-user-item.component.sass']
})
export class ChatSideUserItemComponent implements OnInit {
  @Input() user = {};

  constructor() { }

  ngOnInit() {
  }

}
