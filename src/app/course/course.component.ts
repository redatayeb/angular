import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  template: `<h1>Course Component</h1>
  <p>This is the course component.</p>
  <p>Here you can learn about Angular basics.</p>
  <p>Stay tuned for more updates!</p>
  <a href="https://www.google.com">click here</a>
  
  <p>{{ title }}</p>
  <p>{{ description }}</p>

  <ul>
    <li *ngFor="let item of items">{{ items }}</li>
  </ul>

  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = 'Course Component';
  description = 'This component provides information about the course.';
  items = ['Angular Basics', 'Components', 'Directives', 'Services', 'Routing'];

}
