import { Injectable } from '@angular/core';

import { Category } from './category';

@Injectable()
export class CategoryService {
    getCategories(): Promise<Category[]> {
        // generate Category List
        const Categories = [
            { id: 1, icon: 'eject', title: 'Hot News' },
            { id: 2, icon: 'face', title: 'Human' },
            { id: 3, icon: 'grade', title: 'Celebrities' },
            { id: 4, icon: 'gavel', title: 'Politics & Laws' },
            { id: 5, icon: 'motorcycle', title: 'Traffic' },
        ];
        return Promise.resolve(Categories);
    }
}