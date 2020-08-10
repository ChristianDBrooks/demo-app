import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { url } from 'inspector';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  BASE_URL = "https://api.esv.org/v3"
  AUTH_TOKEN = "Authorization: Token e2905d1964aa24cb7127b0c0d352b7d2eac406d9";


  constructor(private httpClient: HttpClient) { }

  getOptions() {
    return {
      headers: new HttpHeaders("Authorization: Token e2905d1964aa24cb7127b0c0d352b7d2eac406d9"),
    };
  }

  buildParams(params) {
    let url = '?'
    let count = 0;
    for (let param in params) {
      if (count > 0) {
        url += '&'
      }
      url += param + '=' + params[param]
      count++;
    }
    return url;
  }

  getPassage(passage) {
    if (passage != null || passage != undefined || passage != "") {
      let params = {
        'q': passage,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': false,
        'include-short-copyright': false,
        'include-passage-references': false
      }
      let url = this.BASE_URL + '/passage/text' + this.buildParams(params);
      return this.httpClient.get(url, this.getOptions());
    }
  }
}
