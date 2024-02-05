import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Directive({
  selector: '[appGoogleSignin]',
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) {
    console.log('GoogleSigninDirective instantiated');
  }
  
  @HostListener('click')
    onclick(){
      console.log('clicked')
      // this.afAuth.signInWithPopup(new GoogleAuthProvider()).catch(error => console.error(error));
    }
}
