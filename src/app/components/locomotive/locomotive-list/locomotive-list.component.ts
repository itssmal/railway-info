import { Component, OnInit } from '@angular/core';
import { LocomotiveService } from '../../../core/services/locomotive.service'
import { Locomotive } from '../../../core/interfaces/interfaces'
import { Router } from '@angular/router'

@Component({
  selector: 'app-locomotive-list',
  templateUrl: './locomotive-list.component.html',
  styleUrls: ['./locomotive-list.component.scss']
})
export class LocomotiveListComponent implements OnInit {
  public locomotives: Array<Locomotive> = []
  public prepareArr = []
  public repairArr = []

  constructor(private locomotiveService: LocomotiveService,
              private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }

  private getData = async () => {
    await this.locomotiveService.getAll().toPromise()
        .then(res => this.locomotives = res)
        .catch(e => console.log(e))
  }

  public openElem = (id: number) => {
    this.router.navigate([`/locomotive/${id}`])
  }

}
