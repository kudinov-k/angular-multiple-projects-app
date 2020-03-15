import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardBaseComponent } from 'projects/base/src/app/components/dashboard/dashboard-base.component'

describe('DasboardComponent', () => {
  let component: DashboardBaseComponent
  let fixture: ComponentFixture<DashboardBaseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBaseComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
