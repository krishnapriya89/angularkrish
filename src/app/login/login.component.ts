import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  public myname='krishnapriya'//public is optional
  myid='testid'
  vartest1=true
   testfun(){
    //  console.log('hi')
    this.vartest1=false
   }
   favcolor:any
   newcolor:any
   samplefun(){
     console.log(this.favcolor)
   }
   ngmodel1:any

}
