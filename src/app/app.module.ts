import { JokeService } from './services/jokeservice/joke-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { JokesComponent } from './jokes/jokes.component';

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
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
