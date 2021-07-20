import { Component, OnInit } from '@angular/core';
import {register} from './regform.model';
import{DataserviceService} from '../services/dataservice.service';



@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
  }
res= new register()
message:any
insertfn(){
  console.log(this.res)
  this.service.datainsert(this.res).subscribe(result=>{
    this.message=(result);
  })
}
}
