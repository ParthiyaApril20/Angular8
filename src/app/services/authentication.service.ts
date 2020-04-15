import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data) {
    const jsonFile = '../../assets/test.json';

   // let headers = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
    console.log('login service data==>'+data);
    let url = 'http://localhost:8585/IntegratedPortal/api/private/v1/login';
    return this.http.post(url,data, httpOptions);
    //.pipe(map((response: Response) => response.json()));
  }
}
