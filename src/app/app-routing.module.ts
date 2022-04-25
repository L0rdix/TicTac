import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
