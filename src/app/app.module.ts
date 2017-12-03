import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavSubMenuComponent } from './nav-sub-menu/nav-sub-menu.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FooterComponent } from './footer/footer.component';
import { ImageDisplayComponent } from './product-page/image-display/image-display.component';
import { InfoDisplayComponent } from './product-page/info-display/info-display.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavSubMenuComponent,
    ProductPageComponent,
    FooterComponent,
    ImageDisplayComponent,
    InfoDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
