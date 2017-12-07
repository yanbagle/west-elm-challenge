import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavSubMenuComponent } from './nav-sub-menu/nav-sub-menu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FooterComponent } from './footer/footer.component';
import { ImageDisplayComponent } from './product-page/image-display/image-display.component';
import { InfoDisplayComponent } from './product-page/info-display/info-display.component';
import { HeaderComponent } from './header/header.component';
import {ProductService} from './services/product-service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavSubMenuComponent,
    ProductPageComponent,
    FooterComponent,
    ImageDisplayComponent,
    InfoDisplayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
