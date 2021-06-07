import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { Schedule } from '../../core/interfaces/interfaces'
import { ScheduleService } from '../../core/services/schedule.service'
import { NbDialogService } from '@nebular/theme'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    @ViewChild('templateRef') templateRef: TemplateRef<any>

    public elementToShow: Schedule | null = null
    public delMode = false
    public form: FormGroup
    public data: Array<Schedule> = []
    public dialog

    constructor(private scheduleService: ScheduleService,
                private dialogService: NbDialogService,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.getData()
        this.form = new FormGroup({
            arrivalDay: new FormControl('Monday', Validators.required),
            departureDay: new FormControl('Tuesday', Validators.required),
            arrivalDate: new FormControl('2021-06-21', Validators.required),
            departureDate: new FormControl('2021-06-22', Validators.required),
        })
    }

    private getData = () => {
        this.scheduleService.getScheduleList().toPromise()
            .then(res => this.data = res)
            .catch(e => console.log(e))
    }

    public openElem = (idx: number) => {
        this.elementToShow = this.data[idx]
    }

    public editElem = (elem: Schedule) => {
        this.dialog = this.dialogService.open(this.templateRef)
        this.dialog.onClose.subscribe(res => console.log(res))
    }

    public goToPassengers = (id: number) => {
        this.router.navigate(['/passengers'])
    }

    public toggleDelMode() {
        this.delMode = !this.delMode
    }

    public deleteElem(i: number) {
        this.scheduleService.deleteElem(i)
        this.getData()
    }

    public addItem() {
        this.dialog = this.dialogService.open(this.templateRef)
        this.dialog.onClose.subscribe((res) => res === 'submit' ? this.onSubmit() : null)
    }

    public onSubmit() {
        let body = {
            ...this.form.value,
            "routeId": {
                "id": 5,
                "race": "DOMESTIC",
                "initialDestination": "Chernivtsi",
                "finalDestination": "Odessa",
                "mainStations": "Chernivtsi-Lviv-Vinitsia-Odessa"
            },
            "locomotiveId": {
                "id": 5,
                "numberWagons": 6,
                "type": "PASSENGERS",
                "condition": "READY"
            }
        }

        this.scheduleService.addItem(body).toPromise()
            .then(res => this.getData())
            .catch(e => console.log(e))
    }
}
