import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdditivesService {

  // The BehaviorSubject will store the New York Times Search instance into memory and allows us to emit new values
  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  // The Observable is just a limited version of BehaviorSubject to expose to public
  public data$: Observable<any> = this._data$.asObservable();

  constructor(private http: HttpClient) { 

  }

  public async fetchData() {
  
   // let apiEndpoint = `http://localhost:3000/additives`;
    //let apiEndpoint = '/assets/db.json';
    let apiEndpoint = '../../assets/db.json';
    
    const data = await this.http.get<any>(apiEndpoint).pipe(
    //  first(),
      map(res => res.additives)
      ).toPromise();
    this._data$.next(data);
  }

  public async dispDetail(id:string) {
    console.log('id: ', id);
    const data = this._data$.value;
    if (!data) await this.fetchData();
    const result = this._data$.value.find(el => el.id ===  id);
    if (!result) return alert('no data');
    console.log('result:', result);
    return result;
  }
  
}
