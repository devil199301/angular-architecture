interface UV {
  County: string;
  PublishAgency: string;
  PublishTime: string;
  SiteName: string;
  UVI: string;
  WGS84Lat: string;
  WGS84Lon: string;
}

export class UVmodel {
  private raw: UV;
  county: string;
  siteName: string;
  lat: string;
  lon: string;
  constructor(souces: UV) {
    this.raw = souces;
    this.county = souces.County;
    this.siteName = souces.SiteName;
    this.lat = souces.WGS84Lat.replace(',', '°').replace(',', '\'') + '"N';
    this.lon = souces.WGS84Lon.replace(',', '°').replace(',', '\'') + '"E';
  }

}
