import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  title = 'Chuck Norris';
  jokes = getJokes()
          .then(jokes => jokes.value)
          .catch( err => console.log(err));
  constructor() { }

  ngOnInit() {
  }

}

async function getJokes() {
  const res = await fetch ('http://api.icndb.com/jokes/random/10');
  const data = await res.json();
  return data;
}