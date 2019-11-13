import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG, Config } from '@core/core.options';
import { map } from 'rxjs/operators';
import { UVmodel } from 'src/app/＠core/models/uv';

@Injectable()
export class OpenService {

  count = 0;

  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: Config,
  ) {
    console.log(config);
  }

  categories() {

    const url = 'http://opendata.epa.gov.tw/webapi/Data/UV/?$orderby=PublishTime%20desc&$skip=0&$top=1000&format=json';
    return this.http
      .jsonp(url, 'callback')
      .pipe(
        // map((list: []) => list.map((item: any) => ({ county: item.County, siteName: item.SiteName })))
        map((list: []) => list.map(item => new UVmodel(item)))
      );
  }

  add() {
    this.count++;
  }
}
