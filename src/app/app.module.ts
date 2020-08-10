import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormExComponent } from './components/reactive-form-ex/reactive-form-ex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { CssGridExampleComponent } from './components/css-grid-example/css-grid-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavLinkDirective } from './directives/nav-link.directive';
import { StepperExampleComponent } from './components/stepper-example/stepper-example.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RememberVerseComponent } from './components/remember-verse/remember-verse.component';
import { TimerPipe } from './pipes/timer.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormExComponent,
    ExamplePageComponent,
    CssGridExampleComponent,
    NavigatorComponent,
    HomePageComponent,
    NavLinkDirective,
    StepperExampleComponent,
    RememberVerseComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
