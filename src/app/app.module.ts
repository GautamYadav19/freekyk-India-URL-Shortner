import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTinyUrlModule } from 'ng-tiny-url';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdditionalInformationComponent } from './component/additional-information/additional-information.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AdditionalInformationComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgTinyUrlModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
