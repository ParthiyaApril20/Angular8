import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/form-data'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UploaderService {
  private baseUrl = 'http://localhost:8585/IntegratedPortal/api/private/v1';
  constructor(private http:HttpClient) { }

  SaveFile1(file: File){
    console.log('file in servce class==>'+file)
    const formData: FormData = new FormData();
    if(file != null){
      formData.append('file', file,file.name);
    } else{
      console.log('else');
      formData.append('file', null);
    }
    var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
    let url = 'http://localhost:8585/IntegratedPortal/api/private/v1/uploadCandidateDetails';
    return this.http.post(url,formData, {headers: headers });
  }

  saveFile(file: File): Observable<HttpEvent<any>> {
    console.log('file in servce class==>'+file)
    const formData: FormData = new FormData();
    if(file != null){
      formData.append('file', file,file.name);
    } else{
      console.log('else');
      formData.append('file', null);
    }
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadCandidateDetails`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log('request::'+req);
    return this.http.request(req);
  }

  saveResumes(file: File): Observable<HttpEvent<any>> {
    console.log('file in servce class saveResumes()==>'+file)
    const formData: FormData = new FormData();
    if(file != null){
      formData.append('file', file,file.name);
    } else{
      console.log('else');
      formData.append('file', null);
    }
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadResume`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log('resume request::'+req);
    return this.http.request(req);
  }
}
