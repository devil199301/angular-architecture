import { Component, OnInit } from '@angular/core';
import { OpenService } from '@core/services/open.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uv$ = this.openService.categories();

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


  openGoogleMap(item) {
    window.open(`http://maps.google.com/?q=${item.lat},${item.lon}`, '_blank');
  }
}
