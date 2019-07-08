import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  arr=[0];
  len:number;

  ngOnInit()
  {
    
  }

  public expand()
  {
    this.arr.push(0);
    this.len=this.arr.length;
    //console.log(this.len);
  }
}
