import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/users',pathMatch: 'full'
  },
  {
    path: 'users', component: UsersComponent,

  },
  {
    path: 'user-add', component: UserAddComponent,

  },
  {
    path: 'user-edit/:id', component: UserAddComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
