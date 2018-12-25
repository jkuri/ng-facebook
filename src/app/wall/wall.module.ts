import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallRoutingModule } from './wall-routing.module';
import { WallIndexComponent } from './wall-index/wall-index.component';
import { PostModule } from '../post/post.module';

@NgModule({
  imports: [
    CommonModule,
    WallRoutingModule,
    PostModule
  ],
  declarations: [
    WallIndexComponent
  ]
})
export class WallModule { }
