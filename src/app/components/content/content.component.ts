import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Output() myEvent = new EventEmitter();
  contentData: string = 'Content Data';

  constructor() {}
  //
  // ngOnInit(): void {
  //   this.myEvent.emit(this.contentData);
  //   console.log('2-after constructor automaic');
  // }
}
