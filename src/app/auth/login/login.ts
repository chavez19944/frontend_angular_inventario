import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)])
  })


  authService = inject(AuthService);

  funLogin() {
    this.authService.funConectarConBackendLogin(this.loginForm.value as any).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.error('Error en login', error);
    }
    );
  }
}
