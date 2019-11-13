import { Component, OnInit } from '@angular/core';
import { OpenService } from '@core/services/open.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private openService: OpenService,
  ) { }

  ngOnInit() {
  }

  get count() {
    return this.openService.count;
  }

  add() {
    this.openService.add();
  }

}
