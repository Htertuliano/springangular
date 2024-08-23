import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'nav', component: NavComponent},
    { path: 'employees', component: EmployeeListComponent  },
    {path: 'addEmployee', component: CreateEmployeeComponent},
    {path: 'editEmployee', component: EditEmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}