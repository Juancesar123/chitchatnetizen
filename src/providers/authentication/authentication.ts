import { Configendpoint } from './../../configendpoint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }
  Auth(data){
    return this.http.post(Configendpoint.endpointapi+'/authentication',data);
  }
  Register(data){
    return this.http.post(Configendpoint.endpointapi+'/users',data);
  }
}
