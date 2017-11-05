import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = [
    {
      id: 0,
      name: 'JavaScript'
    },
    {
      id: 1,
      name: 'C++'
    },
    {
      id: 2,
      name: 'Python'
    },
    {
      id: 3,
      name: 'C'
    },
    {
      id: 4,
      name: 'Java'
    },
    {
      id: 5,
      name: 'C#'
    },
    {
      id: 6,
      name: 'R'
    },
    {
      id: 7,
      name: 'PHP'
    },
    {
      id: 8,
      name: 'Go'
    },
    {
      id: 9,
      name: 'Swift'
    },
    {
      id: 10,
      name: 'Objective-C'
    },
    {
      id: 11,
      name: 'TypeScript'
    }
  ]
  title = 'Scalors test task!';
}
