import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'
import { Employee } from '../../core/interfaces/interfaces'
import { EmployeeService } from '../../core/services/employee.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  private routeSub: Subscription
  public isLoading = true
  public employee: Employee

  constructor(private route: ActivatedRoute,
              public location: Location,
              private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
        (params: Params) => {
          this.fetchEmployee(params['id'])
        }
    )
  }

  private fetchEmployee = (id: string) => {
    this.employeeService.getEmployeeById(id).toPromise()
        .then(res => {
          this.employee = res
          this.isLoading = false
        })
        .catch(e => console.log(e))
  }

}
