import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // display=false
  displayhome=true
  displaycontact=false
  displayabout=false
  homefun(){
    this.displayhome=true
    this.displaycontact=false
    this.displayabout=false

  }
  aboutfun(){
    this.displayhome=false
    this.displaycontact=false
    this.displayabout=true
  }
  contactfun(){
    this.displayhome=false
    this.displaycontact=true
    this.displayabout=false
  }
}
