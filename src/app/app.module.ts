import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HeaderBannerComponent } from './common/header-banner/header-banner.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './common/footer/footer.component';
import { PortfolioModalComponent } from './common/portfolio-modal/portfolio-modal.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



import { environment } from './environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderBannerComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    FooterComponent,
    PortfolioModalComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    UserProfileComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'], // your backend domain
        disallowedRoutes: ['localhost:3000/login'] // routes that don't require a token
      }
    })
  /*   MatMenuModule,
    MatIconModule
   */
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}

