import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyCreateComponent } from './property-create/property-create.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { PropertyFindComponent } from './property-find/property-find.component';
import { PropertyDeleteComponent } from './property-delete/property-delete.component';
import { PropertyViewComponent } from './property-view/property-view.component';


const routes: Routes = [
  {
    path: 'prorperty-create',
    component: PropertyCreateComponent 
  },
  {
    path: 'prorperty-edit',
    component: PropertyEditComponent 
  },
  {
    path: 'prorperty-find',
    component: PropertyFindComponent 
  },
  {
    path: 'prorperty-delete',
    component: PropertyDeleteComponent 
  },
  {
    path: 'prorperty-view',
    component: PropertyViewComponent 
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }
