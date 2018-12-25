import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallIndexComponent } from './wall-index/wall-index.component';

const routes: Routes = [
  { path: '', component: WallIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallRoutingModule { }
