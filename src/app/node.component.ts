import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'node',
  templateUrl:'./node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent  {
  @Input() name: string;
  @Input() op: string;
  @Input() lhs: string;
  @Input() rhs: string;
  @Input() len:number;

  ngOnInit()
  {
    this.op="+";
    this.lhs="lhs";
    this.rhs="rhs";
    console.log("set");
    this.len*=20;
    console.log(this.len);
  }
}
