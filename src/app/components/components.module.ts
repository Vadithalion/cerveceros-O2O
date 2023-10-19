import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';



@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ]
})
export class ComponentsModule { }
