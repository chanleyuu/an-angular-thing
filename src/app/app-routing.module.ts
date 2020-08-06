import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TosComponent } from './components/tos/tos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RatingsPageComponent } from './components/pages/ratings-page/ratings-page.component';
import { RatingsFormComponent } from './components/ratings-form/ratings-form.component';
import { Form2Component} from './components/form2/form2.component';


const routes: Routes = [
  { path: '', component: TosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ratings-page', component: RatingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
