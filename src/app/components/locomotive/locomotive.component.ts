import { Component, OnInit } from '@angular/core';
import { LocomotiveService } from '../../core/services/locomotive.service'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'
import { Locomotive } from '../../core/interfaces/interfaces'
import { Location } from '@angular/common'

@Component({
  selector: 'app-locomotive',
  templateUrl: './locomotive.component.html',
  styleUrls: ['./locomotive.component.scss']
})
export class LocomotiveComponent implements OnInit {
  private routeSub: Subscription
  public isLoading = true
  public locomotive: Locomotive

  constructor(private locomotiveService: LocomotiveService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
        (params: Params) => {
          this.locomotiveService.getLocomotiveById(params['id'])
              .subscribe(res => {
                this.locomotive = res
                this.isLoading = false
              })
        }
    )
  }

}
