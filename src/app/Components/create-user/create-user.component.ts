import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from './../../Services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { 
    this.validator();
  }

  ngOnInit(): void {}
  validator() {
    this.createUserForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Name: ['', Validators.required],
      Age: ['', Validators.required],
      Gender: ['', [Validators.required]],
      Type: ['', [Validators.required]],
    });
  }

  userCreate() {
    if (this.createUserForm.valid) {
      this.userService.create(this.createUserForm.value).subscribe(
        (userCreated) => {
          alert('Usuario registrado');
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/create-user']));
        },
        (error) => {
          alert('Error al registrar el usuario');
        }
      );
    } else {
      alert("Se requieren todos los campos");
      // Ahora acá podes colocar algo que nos diga que debe llenar todos los campos
    }
  }

}
