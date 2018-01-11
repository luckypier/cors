import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private oauthService: OauthService) { }

  ngOnInit() {
    console.log('DashboardComponent..');

    this.activatedRoute.queryParams.subscribe(params => {
      const oauthCode = params['code'];

      if (oauthCode) {
        this.testingOauth(oauthCode);
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


}
