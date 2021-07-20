import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpclient:HttpClient) { }
  datainsert(data:any){
    // console.log(data)
    return this.httpclient.post('http://cybersquare.herokuapp.com/user/',data)

  }
  getdata(){
    return this.httpclient.get('http://cybersquare.herokuapp.com/user/')
  }
}
