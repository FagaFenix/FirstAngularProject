import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  createCategoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.validator();
  }

  ngOnInit(): void {}
  validator() {
    this.createCategoryForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', [Validators.required]],
    });
  }

  categoryCreate() {
    if (this.createCategoryForm.valid) {
      this.categoryService.create(this.createCategoryForm.value).subscribe(
        (categoryCreated) => {
          alert('Categoría creada');
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/create-category']));
        },
        (error) => {
          alert('Error al crear la categoría');
        }
      );
    } else {
      //alert("ahora si llegó acá");
      // Ahora acá podes colocar algo que nos diga que debe llenar todos los campos
    }
  }
}
