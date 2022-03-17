import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Demo';
  name ="Deepak";

  todayDate = new Date();
  jsonval = {name :"Ajay", age : 25, address :{address1:"Calcutta", address2:"Delhi"}};
  months=["Jan", "Feb", "March", "April" ,"May" , "June", "July", "Aug"];
  


}
