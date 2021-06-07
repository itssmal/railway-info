import { Component, OnInit } from '@angular/core'
import { Employee } from '../../../core/interfaces/interfaces'
import { Router } from '@angular/router'
import { EmployeeService } from '../../../core/services/employee.service'

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    public employees: Array<Employee> = []

    constructor(
        private router: Router,
        private employeeService: EmployeeService
    ) {}

    ngOnInit(): void {
       this.getData()
    }

    private getData = async () => {
        this.employeeService.getEmployeeList().toPromise()
            .then(res => this.employees = res)
            .catch(e => console.log(e))
    }

    public openEmployee = (id: number) => {
        this.router.navigate([`/employee/${id}`])
    }

}
