import { Component, OnInit } from '@angular/core'
import { SimpleDataService } from 'projects/tools/src/lib/simple-data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-base.component.html',
  styleUrls: ['./dashboard-base.component.scss']
})
export class DashboardBaseComponent implements OnInit {

  identifier: string
  simpleData: string

  constructor(private simpleDataService: SimpleDataService) {
  }

  ngOnInit() {
    this.identifier = 'Dashboard Base'
  }

  onButtonClick() {
    this.simpleData = this.simpleDataService.getData
  }

}
