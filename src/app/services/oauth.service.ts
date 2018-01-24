import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OauthService {
  private headers = new Headers({
    'Authorization': 'Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM='
  });

  constructor(private http: Http) { }

  changeCodeForToken(code) {
    const d = {
      'oauth_url': '10.36.70.64:8087',
      'grant_type': 'authorization_code',
      'client_id': 'prime-front-end-key',
      'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003',
      'redirect_uri': 'http://10.36.71.183:4200/dashboard',
      'response_type': 'code',
      'code': code
    };

    const url = `http://${d.oauth_url}/oauth/token?grant_type=${d.grant_type}&client_id=${d.client_id}&client_secret=${d.client_secret}&redirect_uri=${d.redirect_uri}&code=${d.code}`;
    // const url = `prime-front-end-key:49b67f2c-c662-11e7-a3b6-0242ac120003@10.36.70.64:8087/oauth/token?grant_type=authorization_code&client_id=prime-front-end-key&redirect_uri=http://10.36.71.183:4200/dashboard&code=fDlIK2

    // return this.http.post(url, {}, {headers: this.headers})
    return this.http.post(url, {})
    .map((response: Response) => {
        const body = response.json();
        console.log('OauthService response fron client service', body);
        return body;
    });
  }

}
