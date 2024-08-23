import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, NavComponent, RouterLink, RouterLinkActive],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employee?: Employee[];
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){}

  ngOnInit(){
    this.employeeService.getEmployeeList().subscribe((res:any) =>
    {this.employee = res
    })
  }

  deleteEmployee(id: any){
    this.employeeService.deleteEmployee(id).subscribe((res:any) =>{
      console.log(res);
    })
  }


}
