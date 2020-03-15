import { Component, OnInit } from '@angular/core'
import { DashboardBaseComponent } from 'projects/base/src/app/components/dashboard/dashboard-base.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: '../../../../../base/src/app/components/dashboard/dashboard-base.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends DashboardBaseComponent implements OnInit {


  ngOnInit() {
    this.identifier = 'Dashboard Customer 1'
  }

}
