import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { OauthService } from '../services/oauth.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  oauthCode: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private oauthService: OauthService) { }

  ngOnInit() {
    console.log('DashboardComponent..');

    this.activatedRoute.queryParams.subscribe(params => {
      this.oauthCode = params['code'];

      if (this.oauthCode) {
        this.testingOauth(this.oauthCode);
      }
    });

  }

  testingOauth(code) {
    this.oauthService.changeCodeForToken(code)
    .subscribe(
      data => {
        console.log('changeCodeForToken response from DashboardComponent', data);
      },
      error => {
        console.error('changeCodeForToken response from DashboardComponent', error);
      }
    );
  }

  testingOauthJq(code) {
    const d = {
      'oauth_url': '10.36.70.64:8087',
      'grant_type': 'authorization_code',
      'client_id': 'prime-front-end-key',
      'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003',
      'redirect_uri': 'http://10.36.71.183:4200/dashboard',
      'response_type': 'code',
      'code': code
    };

    // const config = {
    //   params: {
    //     grant_type: 'password',
    //     username: d.client_id,
    //     password: d.client_secret

    //   },
    //   headers: {
    //     Authorization: 'Basic ' + Base64.encode('secret-client' + ':' + 'secret')
    //   }
    // };

    // $.post(`http://10.36.70.64:8087/oauth/token?grant_type=authorization_code&client_id=prime-front-end-key&client_secret=49b67f2c-c662-11e7-a3b6-0242ac120003&redirect_uri=http://10.36.71.183:4200/dashboard&code=${code}`,
    // {},
    // function(data, status){
    //     console.log(data);
    // });

    $.post(`http://10.36.70.64:8087/oauth/token`,
    {
      'grant_type': 'authorization_code',
      'client_id': 'prime-front-end-key',
      'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003',
      'redirect_uri': 'http://10.36.71.183:4200/dashboard',
      'code': code,
    },
    function(data, status){
        console.log(data);
    });

    // const settings = {
    //   'async': true,
    //   'crossDomain': true,
    //   'url': 'http://10.36.70.64:8087/oauth/token',
    //   'method': 'POST',
    //   'headers': {
    //     'content-type': 'application/json'
    //   },
    //   'processData': false,
    //   'data': "{\"grant_type\":\"authorization_code\",\"client_id\": \"prime-front-end-key\",\"client_secret\": \"49b67f2c-c662-11e7-a3b6-0242ac120003\",\"code\": \"ubWVTX\",\"redirect_uri\": \"http://10.36.71.183:4200/dashboard\"}"
    // };

    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
  }


}
