import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swtchcase',
  templateUrl: './swtchcase.component.html',
  styleUrls: ['./swtchcase.component.css']
})
export class SwtchcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color="white"
  // forloop
studentlist=['hari','krishna','sooyra','adhi','nakshatra']
students=[
  {'name':'krishna','Age':20,'place':'edappla'},
  {'name':'unni','Age':50,'place':'tsr'},
  {'name':'radha','Age':25,'place':'alappi'},
  {'name':'raju','Age':15,'place':'kottayam'}

]
displaycolor:any
newarray=[
  {'name':'akhila','age':28,'place':'thrithala'},
  {'name':'krishna','age':32,'place':'edappal'},
  {'name':'anu','age':32,'place':'calicut'}
]
deletefn(i:any){
  this.newarray.splice(i,1);
  console.log(i);
}
}

