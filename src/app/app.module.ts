import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule, NbDialogModule, NbInputModule, NbSpinnerModule,
} from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocomotiveComponent } from './components/locomotive/locomotive.component';
import { LocomotiveListComponent } from './components/locomotive/locomotive-list/locomotive-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ScheduleComponent,
        EmployeeComponent,
        EmployeeListComponent,
        NavbarComponent,
        LocomotiveComponent,
        LocomotiveListComponent,
        PassengerListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NbThemeModule.forRoot({name: 'default'}),
        NbDialogModule.forRoot(),
        NbLayoutModule,
        NbEvaIconsModule,
        NbIconModule,
        NbCardModule,
        NbListModule,
        NbUserModule,
        NbButtonModule,
        NbInputModule,
        ReactiveFormsModule,
        NbSpinnerModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
