import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oauthData: any;
  oauthUrlLogin: string;
  curlRequest: string;
  userAccount: Number;

  constructor() {
    this.oauthData = {
      'oauth_url': '10.36.70.64:8087',
      'client_id': 'prime-front-end-key',
      'scope': null,
      'redirect_uri': 'http://10.36.71.183:4200/dashboard',
      'response_type': 'code'
    };

    this.curlRequest = `curl prime-front-end-key:49b67f2c-c662-11e7-a3b6-0242ac120003@${this.oauthData.oauth_url}/oauth/token -d grant_type=authorization_code -d client_id=prime-front-end-key -d redirect_uri=${this.oauthData.redirect_uri} -d code=`;
    this.userAccount = 4557886000000018;
  }

  ngOnInit() {
  }

  oauth() {
    this.oauthUrlLogin = `http://${this.oauthData.oauth_url}/oauth/authorize?client_id=${this.oauthData.client_id}&scope=&redirect_uri=${this.oauthData.redirect_uri}&response_type=${this.oauthData.response_type}`;

    const url = prompt('Going to OauthLogin:', `${this.oauthUrlLogin}`);
    if (url != null) {
        window.location.href = url;
    }
  }

}
