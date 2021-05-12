import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatInputModule
    ]

})
export class MaterialModule {}