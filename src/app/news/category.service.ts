import { Injectable } from '@angular/core';

import { Category } from './category';

@Injectable()
export class CategoryService {
    getCategories(): Promise<Category[]> {
        // generate Category List
        const Categories = [
            { id: 1, icon: 'public', title: 'General' },
            { id: 2, icon: 'business center', title: 'Business' },
            { id: 3, icon: 'mood', title: 'Entertainment' },
            { id: 4, icon: 'devices other', title: 'Technology' },
            { id: 5, icon: 'pool', title: 'Sport' },
            { id: 6, icon: 'gamepad', title: 'Gaming' },
            { id: 7, icon: 'audiotrack', title: 'Music' },
            { id: 8, icon: 'landscape', title: 'Science and Nature' },

        ];
        return Promise.resolve(Categories);
    }
}