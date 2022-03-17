import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe-comp';
import { GenderPipe } from './gender.pipe';
import { ParentComponent  } from './parent-comp';
import  {ChildComponent} from './child-comp';

import { StudentComponent } from './student.component';
import { SearchComponent } from './search.component';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    GenderPipe,
    ChildComponent,
    ParentComponent,
    StudentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
