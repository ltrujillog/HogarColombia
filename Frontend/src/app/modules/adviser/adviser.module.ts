import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviserRoutingModule } from './adviser-routing.module';
import { PropertyCreateComponent } from './property-create/property-create.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { PropertyFindComponent } from './property-find/property-find.component';
import { PropertyDeleteComponent } from './property-delete/property-delete.component';
import { PropertyViewComponent } from './property-view/property-view.component';


@NgModule({
  declarations: [
    PropertyCreateComponent,
    PropertyEditComponent,
    PropertyFindComponent,
    PropertyDeleteComponent,
    PropertyViewComponent
  ],
  imports: [
    CommonModule,
    AdviserRoutingModule
  ]
})
export class AdviserModule { }
