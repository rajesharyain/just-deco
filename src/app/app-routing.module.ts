import { HomeComponent } from './pages/home/home.component';
import { HeaderBannerComponent } from './common/header-banner/header-banner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:"home"},
  {path:"home", component: HomeComponent},
  {path: "services", component:ServicesComponent},
  {path: "portfolio", component:PortfolioComponent},
  {path: "about", component:AboutComponent},
  {path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
