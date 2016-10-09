import { Injectable } from '@angular/core';

import { Category } from './category';

@Injectable()
export class CategoryService {
    getCategories(): Promise<Category[]> {
        // generate Category List
        const Categories = [
            { id: 1, icon: 'public', title: 'General', path: 'general', colortheme: 'color-cyan' },
            { id: 2, icon: 'business center', title: 'Business', path: 'business', colortheme: 'color-pink' },
            { id: 3, icon: 'mood', title: 'Entertainment', path: 'entertainment', colortheme: 'color-orange' },
            { id: 4, icon: 'devices other', title: 'Technology', path: 'technology', colortheme: 'color-indigo' },
            { id: 5, icon: 'pool', title: 'Sport', path: 'sport', colortheme: 'color-deeppurple' },
            { id: 6, icon: 'gamepad', title: 'Gaming', path: 'gaming', colortheme: 'color-red' },
            { id: 7, icon: 'audiotrack', title: 'Music', path: 'music', colortheme: 'color-deeporange' },
            { id: 8, icon: 'landscape', title: 'Science and Nature', path: 'science-and-nature', colortheme: 'color-green' },

        ];
        return Promise.resolve(Categories);
    }
}
