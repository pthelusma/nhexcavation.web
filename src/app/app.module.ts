import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// ROOT
import { AppComponent } from './app.component';

// Routes
import { 
  GalleryComponent,
  HomeComponent,
  AboutComponent,
  TestimonialsComponent,
  ServicesComponent,
  MaterialsComponent,
  BarkmulchComponent,
  SoilComponent,
  CrushedstoneComponent,
  DecorativestoneComponent,
  GravelandfillComponent,
  SepticComponent,
  HardscapesComponent,
  ExcavationComponent,
  LandscapingComponent,
  PlowingandsandingComponent
} from './routes';

// COMPONENTS
import {
  HeaderComponent,
  FooterComponent,
  ContentComponent,
  CommunicationComponent,
  TestimonialComponent
} from './components';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '', component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CommunicationComponent,
    TestimonialComponent,
    ServicesComponent,
    MaterialsComponent,
    BarkmulchComponent,
    SoilComponent,
    CrushedstoneComponent,
    DecorativestoneComponent,
    GravelandfillComponent,
    SepticComponent,
    HardscapesComponent,
    ExcavationComponent,
    LandscapingComponent,
    PlowingandsandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
