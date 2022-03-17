import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe-comp';
import { GenderPipe } from './gender.pipe';
import { ParentComponent  } from './parent-comp';
import  {ChildComponent} from './child-comp';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    GenderPipe,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
