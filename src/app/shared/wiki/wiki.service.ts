import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private _http:HttpClient) { }

  getWikiDetail(id: string){

    const endPoint:string = `https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}` ;

    return this._http.get(endPoint).pipe(
      //map(res => res.extract)
    ).toPromise()

  }
}
