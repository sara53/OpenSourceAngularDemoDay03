import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges, OnInit, OnDestroy {
  ngOnDestroy(): void {
    //logic // removeEventLister
  }
  @Input() loginData: boolean = false;
  loginTitle: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loginData) {
      this.loginTitle = 'Login Component';
    } else {
      this.loginTitle = 'register Component';
    }
  }
  ngOnInit(): void {
    console.log('2-onInit');
  }
}
