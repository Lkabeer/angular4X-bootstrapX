import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.router";

import { HomeService } from "./services/home.service";
import { BlogService } from "./services/blog.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderXComponent } from './header-x/header-x.component';
import { FooterXComponent } from './footer-x/footer-x.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderXComponent,
    FooterXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HomeService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
