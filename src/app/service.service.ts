import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
   
    }
    getPost(){
      return this.http.get<any>('http://0.0.0.0:3000/api')
      .pipe(map((res)=>{
        return res;
      }))

  }
  // getMyApi(){
  //   return this.http.get<any>('http://0.0.0.0:3000/api') 
  //   .pipe(map((res)=>{
  //     return res;
  //   }))
  
  // }
}
