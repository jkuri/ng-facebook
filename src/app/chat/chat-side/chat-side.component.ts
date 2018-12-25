import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-side',
  templateUrl: './chat-side.component.html',
  styleUrls: ['./chat-side.component.sass']
})
export class ChatSideComponent implements OnInit {
  users: { avatar: string, name: string, online: boolean }[] = [];

  constructor() { }

  ngOnInit() {
    this.users = [
      { avatar: 'https://avatars1.githubusercontent.com/u/1796022?s=460&v=4', name: 'Jan Kuri', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/20.jpg', name: 'Vickie Day', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/21.jpg', name: 'Daniella Kruskal', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/25.jpg', name: 'Maisie Fulgham', online: false },
      { avatar: 'https://randomuser.me/api/portraits/women/50.jpg', name: 'Kaleena Clasen', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/31.jpg', name: 'Amalle Zimmermann-huisgen', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/32.jpg', name: 'Tiffanie Chiassino', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/11.jpg', name: 'Janice Deegan', online: false },
      { avatar: 'https://randomuser.me/api/portraits/women/12.jpg', name: 'Beverlie Risher', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/13.jpg', name: 'Joellyn Towler', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/19.jpg', name: 'Shaylah Donner-corbello', online: true },
      { avatar: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Kayla Dietz', online: false }
    ];
  }

}
