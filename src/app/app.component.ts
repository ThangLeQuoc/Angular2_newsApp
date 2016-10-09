import {Component, OnInit} from '@angular/core';

import {Category} from './news/category';
import {CategoryService} from './news/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [CategoryService]
})


export class AppComponent implements OnInit {
  // theme
  THEME = [
    'cyan-theme', 'pink-theme',
    'orange-theme', 'indigo-theme', 'deeppurple-theme',
    'red-theme', 'deeporange-theme', 'green-theme'
  ];

  theme = '';
  // create Category List
  selectedcat = 0;
  categories: Category[];

  constructor(private categoryService: CategoryService) {

  }

  setTheme(index) {
    this.theme = this.THEME[index];
  }

  // get category List
  getCategories(): void {
    this.categoryService.getCategories()
      .then(Category => {
        this.categories = Category;
      });
  }

  selectCategory(index: any): void {
    this.selectedcat = index;
    this.setTheme(index)
  }

  getCategoryTheme(index: any): string {
    let category = this.categories[index];
    return category.colortheme;
  }

  ngOnInit() {
    this.getCategories();
  }
}
