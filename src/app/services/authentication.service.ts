import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data) {
    const jsonFile = '../../assets/test.json';

   // let headers = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
    alert('JSON.stringify(data)==>'+JSON.stringify(data));
    return this.http.get(jsonFile);
    //.pipe(map((response: Response) => response.json()));
  }
 /* login(data) {
    alert('In service login'+JSON.stringify(data));
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8585/IntegratedPortal/api/private/v1/login', JSON.stringify(data), httpOptions);
  }*/
}
