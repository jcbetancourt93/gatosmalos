import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface ApiResponse {
  ok: boolean;
  token: string;
  // Otros campos en la respuesta si los hay
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
    /* this.submitted = true;

    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      
      this.http.post<ApiResponse>('http://localhost:4000/api/login', userData).subscribe(response => {
        console.log('Respuesta del API:', response);

        if (response.ok === true) {
          this.router.navigate(['/inicio']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se pudo iniciar sesión. Verifica tus credenciales.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          }).then(() => {
            this.loginForm.reset();
          });;
        }
      });
    } */
  }
}
