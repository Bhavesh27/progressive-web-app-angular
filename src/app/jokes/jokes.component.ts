import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  title = 'Chuck Norris';
  jokes = ['there is one for you', 'there is another one for you'];
  constructor() {
    // this.jokes = this.getJokes();
    this.getJokes();
  }

  ngOnInit() {
    // console.log(this.jokes);
  }

  getJokes() {
    return fetch('http://api.icndb.com/jokes/random/10')
           .then((response: any) => {
              return response.json();
           })
           .then((jokes: any) => {
             console.log(jokes.value);
           });
  }

}



