import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{


  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){ }
  id?:number;
  employee = new Employee();
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe((res:any) =>{
      this.employee = res.data;
    });
      
  }

  updateEmployee(){
     this.employeeService.updateEmployee(this.employee).subscribe((res) => {
      console.log(res);
      this.employee = new Employee();
     })
  }

}
