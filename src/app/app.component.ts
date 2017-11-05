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
    }
  ]
  title = 'Scalors test task!';
}
