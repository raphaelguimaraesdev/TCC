import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioAcesso: FormGroup;
  submetido = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioAcesso = this.formBuilder.group({
        usuario: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.formularioAcesso.controls; }

  onSubmit() {
    this.submetido = true;

    if (this.formularioAcesso.invalid) {
      return;
    }
     alert('Sucesso!');
  }

}
