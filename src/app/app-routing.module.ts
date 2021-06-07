import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EmployeeComponent } from './components/employee/employee.component'
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component'
import { LocomotiveListComponent } from './components/locomotive/locomotive-list/locomotive-list.component'
import { LocomotiveComponent } from './components/locomotive/locomotive.component'
import { AppComponent } from './app.component'
import { AuthGuard } from './core/guards/auth.guard'
import { PassengerListComponent } from './components/passenger-list/passenger-list.component'

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        // component: AppComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'schedule',
                component: ScheduleComponent
            },
            {
                path: 'employee',
                component: EmployeeListComponent
            },
            {
                path: 'employee/:id',
                component: EmployeeComponent
            },
            {
                path: 'locomotives',
                component: LocomotiveListComponent
            },
            {
                path: 'locomotive/:id',
                component: LocomotiveComponent
            },
            {
                path: 'passengers',
                component: PassengerListComponent
            }
        ],
        runGuardsAndResolvers: "always"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
