import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../services/dataservice.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private pass:DataserviceService) { }

  ngOnInit(): void {
    this.showdata()
  }
  data:any
  showdata(){
    this.pass.getdata().subscribe(result=>{

      this.data=result
      console.log(this.data)
    })
  }

}
