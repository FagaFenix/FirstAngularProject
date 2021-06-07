import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../Services/category.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  allCategories:any;

  constructor(private categoryService: CategoryService) { }
  
  ngOnInit(): void {//Cuando quiero interactuar con algo externo al componente va ACÁ
      this.getAll()
  }

  getAll(){
    this.categoryService.getAll().subscribe(
      (categories)=>{
        console.log(categories)
        this.allCategories= categories
      },
      (error)=>{
        console.log('Error ->', error)
      }
    )
  }
  
}
