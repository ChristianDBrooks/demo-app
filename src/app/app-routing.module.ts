import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';

//Components
import { ReactiveFormExComponent } from './components/reactive-form-ex/reactive-form-ex.component';
import { CssGridExampleComponent } from './components/css-grid-example/css-grid-example.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'example', component: ExamplePageComponent,
    children: [
      { path: 'reactive-form', component: ReactiveFormExComponent },
      { path: 'css-grid', component: CssGridExampleComponent },
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
