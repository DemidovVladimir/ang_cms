import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

export interface MockedData {
  body: {
    title: string;
    data: string[];
  };
}

const mockedData: MockedData = {
  body: {
    title: 'Checking...',
    data: ['Data', 'Mocked']
  }
};

@Injectable()
export class ApiServices {
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://127.0.0.1';
  }

  httpGetData(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/v1/categories`);
    // return Observable.of(mockedData)
    //   .catch(error => Observable.throw(error));
  }
}
