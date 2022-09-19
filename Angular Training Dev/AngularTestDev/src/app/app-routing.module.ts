import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PastsearchComponent } from './components/pastsearch/pastsearch.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'pastsearch',component:PastsearchComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
