import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricLabelModule } from './lib/label/label.module';
import { FabricCommandBarModule } from './lib/commandbar/commandbar.module';
import { FabricSpinnerModule } from './lib/spinner/spinner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabricLabelModule,
    FabricSpinnerModule,
    FabricCommandBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
