import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

// import { NameComponent } from './name.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap:[AppComponent]

})
export class AppModule { }
