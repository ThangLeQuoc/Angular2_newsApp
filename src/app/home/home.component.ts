import { Component, OnInit } from '@angular/core';
import { Category } from '../news/category';
import { CategoryService } from '../news/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CategoryService]
})
export class HomeComponent implements OnInit {

  // create Category List

  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  // get category List
  getCategories(): void {
    //this.categories = this.categoryService.getCategories();
    this.categoryService.getCategories().then(Category => this.categories = Category);
  }

  ngOnInit() {
    this.getCategories();
  }

}
