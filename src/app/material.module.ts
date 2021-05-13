import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
    ],
    exports: [
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
    ]

})
export class MaterialModule {}