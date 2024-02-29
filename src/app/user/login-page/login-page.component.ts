import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChangeDetectorRef } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(public afAuth: AngularFireAuth){}

  onGoogleSignInClick() {
    console.log('Button clicked from component');
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).catch(error => console.error(error));
  }
  

  ngOnInit(){
    
  }
}
