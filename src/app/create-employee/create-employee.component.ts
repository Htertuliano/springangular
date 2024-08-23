import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [NavComponent, FormsModule, CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee = new Employee();
  showAlert = false;
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
  }
    addEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe((res:any) =>
    {console.log(res);
      this.showAlert = true;

    })
  }
  closeAlert(){
    this.showAlert = false;
  }

   

}
