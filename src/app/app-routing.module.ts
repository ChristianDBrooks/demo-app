import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormExComponent } from './components/reactive-form-ex/reactive-form-ex.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { CssGridExampleComponent } from './components/css-grid-example/css-grid-example.component';

const routes: Routes = [
  
  { path: 'example', component: ExamplePageComponent,
    children: [
      { path: 'reactive-form', component: ReactiveFormExComponent },
      { path: 'css-grid', component: CssGridExampleComponent },
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
