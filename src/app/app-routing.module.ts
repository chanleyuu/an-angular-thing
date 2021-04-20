import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TosComponent } from './components/tos/tos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RatingsPageComponent } from './components/pages/ratings-page/ratings-page.component';
import { RatingsFormComponent } from './components/ratings-form/ratings-form.component';
import { ContratureFormComponent} from './components/ContratureForm/ContratureForm.component';
import { ContratureFormPageComponent } from './components/pages/ContratureForm-page/ContratureForm-page.component';


const routes: Routes = [
  { path: '', component: TosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ratings-page', component: RatingsPageComponent },
  { path: 'ContratureForm-page', component: ContratureFormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
