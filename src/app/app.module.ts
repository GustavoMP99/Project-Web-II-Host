import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { ParallaxModule } from 'ngx-parallax';
import { AppRoutingModule } from './app.routing';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

//pages
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ShopModule } from './shop/shop.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { JwtInterceptorInterceptor } from "./jwt-interceptor.interceptor"


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    ParallaxModule,
    AppRoutingModule,
    ShopModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
