
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';

import {EmployeeService} from '../shared/employee.service';


declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
 

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
     this.resetForm();
     this.refreshEmployeeList();
  }

  resetForm(form?: NgForm)
  {
    if (form)
    form.reset();
    this.employeeService.selectedEmployee = {
      _id:"",
      name:"",
      position:"",
      office:""
    }
  }
onSubmit(Form: NgForm)
{
  if(Form.value._id==""){
  this.employeeService.postEmployee(Form.value).subscribe((res) => {
   
     this.resetForm(Form);
     this.refreshEmployeeList();
    M.toast({ html: 'saved succesfully', classes: 'rounded'});
   
    
  });
}
else {
  
  this.employeeService.putEmployee(Form.value).subscribe((res) => {
    console.log(Form.value);
    this.resetForm(Form);
    this.refreshEmployeeList();
   M.toast({ html: 'updated succesfully', classes: 'rounded'});
 });
}
}
refreshEmployeeList()
{
  this.employeeService.getEmployeeList().subscribe((res) => {
    this.employeeService.employees = res as Employee[];
  });
}

onEdit(emp : Employee){
  this.employeeService.selectedEmployee = emp;
}


onDelete( _id: string, Form: NgForm){
  if(confirm('Are you sure to delete this record ?') == true){
    this.employeeService.deleteEmployee(_id).subscribe((res) => {
      this.refreshEmployeeList();
      this.resetForm(Form);
      
      M.toast({ html: 'Deleted succesfully', classes: 'rounded'});
    });
  }
}
}
