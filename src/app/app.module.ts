import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { JokesComponent } from './jokes/src/app/jokes/jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BlogComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
