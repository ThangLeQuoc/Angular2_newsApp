import { Injectable } from '@angular/core';

import { Category } from './category';

@Injectable()
export class CategoryService {
    getCategories(): Promise<Category[]> {
        // generate Category List
        const Categories = [
            { id: 1, icon: 'public', title: 'General', path: 'general' },
            { id: 2, icon: 'business center', title: 'Business', path: 'business' },
            { id: 3, icon: 'mood', title: 'Entertainment', path: 'entertainment' },
            { id: 4, icon: 'devices other', title: 'Technology', path: 'technology' },
            { id: 5, icon: 'pool', title: 'Sport', path: 'sport' },
            { id: 6, icon: 'gamepad', title: 'Gaming', path: 'gaming' },
            { id: 7, icon: 'audiotrack', title: 'Music', path: 'music' },
            { id: 8, icon: 'landscape', title: 'Science and Nature', path: 'science-and-nature' },

        ];
        return Promise.resolve(Categories);
    }
}