import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userObs$: Observable<User | null> | undefined;
  initials: string | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userObs$ = this.authService.getUser();
    this.userObs$.subscribe(user => {
      if (user && user.displayName!= null) {
        this.initials = this.getInitials(user.displayName);
      }
    });
  }

  getInitials(name: string): string {
    
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return initials;
  }
}
