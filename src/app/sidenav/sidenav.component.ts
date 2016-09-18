import { Component, OnInit } from '@angular/core';
import { Category } from '../news/category';
import { CategoryService } from '../news/category.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [CategoryService]
})
export class SidenavComponent implements OnInit {
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
