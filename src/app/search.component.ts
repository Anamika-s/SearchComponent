import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html'

})
export class SearchComponent {
   
@Output() Search = new EventEmitter<string>();

OnStudentSearch(searchText:any)
{
  console.log(searchText.value);
  this.Search.emit(searchText.value);
}
}