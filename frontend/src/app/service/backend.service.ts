import { HttpClient } from '@angular/common/http';
import { Message } from '../entities/message';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getHelloMessage(name:String):Observable<Message>{
    return this.http.get<Message>(environment.baseUrl+"/getHello/"+name);
  }
}
