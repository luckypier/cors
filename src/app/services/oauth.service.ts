import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

declare var $: any;

@Injectable()
export class OauthService {
  private headers = new Headers({
    'Authorization': 'Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM='
  });

  data: any;
  windowLocation: any;

  constructor(private http: Http) {
    this.windowLocation = window.location;

    this.data = {
      'oauth_url': '10.36.70.64:8087',
      'client_id': 'prime-front-end-key',
      'scope': null,
      'redirect_uri': `${this.windowLocation.origin}/dashboard`,
      'response_type': 'code',
      'grant_type': 'authorization_code',
      'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003',
      'code': null
    };

    localStorage.setItem('oauthData', JSON.stringify(this.data));
  }

  changeCodeForToken() {
    const d = {
      'oauth_url': this.data.oauth_url,
      'grant_type': this.data.grant_type,
      'client_id': this.data.client_id,
      'redirect_uri': this.data.redirect_uri,
      'code': this.data.code
    };

    const url = `http://${d.oauth_url}/oauth/token?grant_type=${d.grant_type}&client_id=${d.client_id}&redirect_uri=${d.redirect_uri}&code=${d.code}`;
    // const url = `prime-front-end-key:49b67f2c-c662-11e7-a3b6-0242ac120003@10.36.70.64:8087/oauth/token?grant_type=authorization_code&client_id=prime-front-end-key&redirect_uri=http://10.36.71.183:4200/dashboard&code=fDlIK2

    return this.http.post(url, {}, {headers: this.headers})
    //return this.http.post(url, {})
    .map((response: Response) => {
        const body = response.json();
        console.log('OauthService response fron client service', body);
        return body;
    });
  }

  changeCodeForTokenJq() {
    const d = {
      'oauth_url': this.data.oauth_url,
      'grant_type': this.data.grant_type,
      'client_id': this.data.client_id,
      'redirect_uri': this.data.redirect_uri,
      'code': this.data.code
    };

    //const url = `http://${d.oauth_url}/oauth/token?grant_type=${d.grant_type}&client_id=${d.client_id}&redirect_uri=${d.redirect_uri}&code=${d.code}`;

    const url = `http://${d.oauth_url}/oauth/token?grant_type=${d.grant_type}&code=${d.code}&redirect_uri=${d.redirect_uri}&client_id=${d.client_id}`;

/*
    $.post(url, {}, function(data, status){
        console.log(data);
    });
*/

    /*$.ajax({
      type: "POST",
      url: url,
      data: d ,
      
      dataType: 'json',
      headers: {
        'AAA': 'BBB',
        'Referer': 'unsafe-url',
        "Authorization": "Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM="
      }  ,
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("XXX", "YYY");
        xhr.setRequestHeader ("Referer", "unsafe-url");
        xhr.setRequestHeader ("Authorization", "Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM=");
      },
      success: function( data, textStatus, jQxhr ){
                   console.log( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
    });*/
  /*  
  $.ajax({
      url: url,
      headers: {
          'Authorization':'Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM=',
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      success: function(data){
        console.log('succes: '+data);
      }
  });
*/

 $.ajax({
      url: url || "/oauth/token?grant_type=password&username=XXXX&password=CCCC",
      headers: {
          'Authorization':'Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM=',
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      success: function(data){
        console.log('succes: '+data);
      }
  });



  }

  getData() {
    return this.data;
  }

  setData(data) {
    localStorage.setItem('oauthData', JSON.stringify(data));
  }

}
