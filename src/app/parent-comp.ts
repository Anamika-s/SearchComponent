import { Component } from "@angular/core";

@Component(
  {
    selector :'parent-app',
    templateUrl:'./parent-comp.html'
  }
)
export class ParentComponent 
{
  name : string="Deepak";
  IAmCalledFromChild(event)
  {
     console.log("Invoked from Child Comp");
     console.log(event);
  }
}