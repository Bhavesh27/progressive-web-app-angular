import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';
import { JokesComponent } from './jokes/jokes.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'users', component: UsersComponent },
  { path: 'jokes', component: JokesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
