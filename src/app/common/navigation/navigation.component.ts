import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  user$: Observable<User | null> | undefined;
  initials: string | undefined;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  
 /*    this.user$ = this.authService.getUser();
    this.user$.subscribe(user => {
      if (user && user.displayName!= null) {
        this.initials = this.getInitials(user.displayName);
      }
    });   */
    //console.log(this.user);
  }

  getInitials(name: string): string {
    
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return initials;
  }
}
