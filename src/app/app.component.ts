import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { Category } from './news/category';
import { CategoryService } from './news/category.service';
// import Angular 2 Material Design Component


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService]
})
export class AppComponent implements OnInit {
  // create Category List

  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  // get category List
  getCategories(): void {
    this.categoryService.getCategories().then(Category => this.categories = Category);
  }

  ngOnInit() {
    this.getCategories();
  }
}
