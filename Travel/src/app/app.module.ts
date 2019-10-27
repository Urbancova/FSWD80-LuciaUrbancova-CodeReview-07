import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { HeroComponent } from './hero/hero.component';
import { HomeBottomComponent } from './home-bottom/home-bottom.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelsService } from "./shared/travels.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    TravelsComponent,
    HeroComponent,
    HomeBottomComponent,
   TravelsListComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
    AngularFireDatabaseModule, // we will import the classes here too
    FormsModule,
  ],
  providers: [TravelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
