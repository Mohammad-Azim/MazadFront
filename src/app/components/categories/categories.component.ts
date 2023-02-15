import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe((response) => (this.categories = response.data));
  }
}
