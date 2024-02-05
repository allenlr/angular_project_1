import { GoogleSigninDirective } from './google-signin.directive';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('GoogleSigninDirective', () => {
  it('should create an instance', () => {
    // Mock AngularFireAuth
    const mockAngularFireAuth = {} as AngularFireAuth;

    // Create an instance of the directive
    const directive = new GoogleSigninDirective(mockAngularFireAuth);
    expect(directive).toBeTruthy();
  });
});
