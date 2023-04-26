import { HttpParams } from '@angular/common/http';

export const objToHttpParams = (obj: any): HttpParams => {
  let params = new HttpParams();

  for (let key in obj) {
    params = params.set(key, obj[key]);
  }

  return params;
};
