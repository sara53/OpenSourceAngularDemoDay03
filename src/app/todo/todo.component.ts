import { Component } from '@angular/core';
/** Attribute Directives
 * ngClass -- ngStyle -- style -- class -- ngModel
 */
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  selectValue: string = '';
  color: string = 'blue';
  flag: boolean = true;
  special: boolean = false;
}
