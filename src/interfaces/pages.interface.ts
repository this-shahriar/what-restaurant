export interface IMapBoxProp {
  lnglat: IMarkers[];
  center: [number, number];
}

export interface IMarkers {
  lnglat: number[];
  type?: string;
  name?: string;
  distance?: string;
  rating?: any;
  tel?: any;
  price?: any;
  geocodes?: any;
  website?: string;
  email?: string;
  description?: string;
}
