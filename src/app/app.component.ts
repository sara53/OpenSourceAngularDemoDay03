import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentData: string = 'Data From Parent';

  dataFromChild: string = '';
  showMessage(e: any) {
    console.log(e);
    console.log('Clcikced');
  }
  getData(data: string) {
    this.dataFromChild = data;
  }
}
