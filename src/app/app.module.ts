import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorSquareComponent } from './color-square/color-square.component'

@NgModule({
  declarations: [
    AppComponent,
    ColorListComponent,
    ColorSquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
