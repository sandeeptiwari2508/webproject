import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee = new Employee;
  employees: Employee[] = [];
  readonly baseURL = 'http://localhost:3000/employee';

  
constructor( public http: HttpClient) {}
postEmployee(emp: Employee){
return this.http.post(this.baseURL, emp);

}
getEmployeeList()
{
  return this.http.get(this.baseURL);
}
putEmployee(emp: Employee)
{
  return this.http.put(this.baseURL + `/${emp._id}` , emp);
}
deleteEmployee(_id: string)
{
  console.log("hello");
  return this.http.delete(this.baseURL + `/${_id}`);
}
}
