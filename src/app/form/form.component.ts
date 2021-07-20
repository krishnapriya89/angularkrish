import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
username:any
password:any
ermsg=" "
loginfun(){
  if((this.username=="12345" && this.password=="12345")){
    
    this.ermsg="login success"
 
  }
  else{
    this.ermsg="unsuccessful"
  }
}
displays=true
}
