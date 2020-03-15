import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardBaseComponent } from 'projects/base/src/app/components/dashboard/dashboard-base.component'

const routes: Routes = [
  {path: '', component: DashboardBaseComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
