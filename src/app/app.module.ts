import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormExComponent } from './components/reactive-form-ex/reactive-form-ex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { CssGridExampleComponent } from './components/css-grid-example/css-grid-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormExComponent,
    ExamplePageComponent,
    CssGridExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
