import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  oauth() {
    const d = {
      'oauth_url': '10.36.70.64:8087',
      'client_id': 'prime-front-end-key',
      'scope': null,
      // 'redirect_uri': 'http://anistep.edu.pe',
      'redirect_uri': 'http://10.36.71.183:4200/dashboard',
      'response_type': 'code'
    };

    const url = `http://${d.oauth_url}/oauth/authorize?client_id=${d.client_id}&scope=&redirect_uri=${d.redirect_uri}&response_type=${d.response_type}`;
    console.log('Going to Oauth server...', url);

    const curl = `curl prime-front-end-key:49b67f2c-c662-11e7-a3b6-0242ac120003@${d.oauth_url}/oauth/token -d grant_type=authorization_code -d client_id=prime-front-end-key -d redirect_uri=${d.redirect_uri} -d code=`;
    console.log('curl: ', curl);

    console.log('cc', 4557886000000018);

    debugger;

    window.location.href = url;
  }

}
