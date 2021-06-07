import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PassengerService } from '../../core/services/passenger.service'
import { Passenger } from '../../core/interfaces/interfaces'

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {
  public passengers: Array<Passenger> = []

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.getData()
  }

  public getData = () => {
    this.passengerService.getAll().toPromise()
        .then(res => this.passengers = res)
  }

  public deleteElem = (id: number) => {
    this.passengerService.deleteElem(id).toPromise()
        .then(res => this.getData())
  }

}
