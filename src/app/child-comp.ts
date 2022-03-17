import { Component , Input, Output , EventEmitter } from "@angular/core";

@Component(
  {
    selector :'child-app',
    templateUrl:'./child-comp.html'
  }
)
export class ChildComponent 
{ @Input()
  data : string;

  // @Output() 
  // onClick = new EventEmitter();

 @Output()
 onClick = new EventEmitter<string>();
   
 @Output() OnClick2= new EventEmitter<string>();
 onClick2(value : string) : void
 {
    
   this.OnClick2.emit(value.toUpperCase());
 }

}