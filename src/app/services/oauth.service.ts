import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OauthService {

  constructor(private http: Http) { }

  changeCodeForToken(code) {
    const url = `http://10.36.70.64:8087/oauth/token?grant_type=authorization_code&client_id=prime-front-end-key&redirect_uri=http://10.36.71.183:4200/dashboard&code=${code}`;

    return this.http.post(url, {})
    .map((response: Response) => {
        const body = response.json();
        console.log('OauthService response fron client service', body);
        return body;
    });
  }

}
