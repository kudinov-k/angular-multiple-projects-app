import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardBaseComponent } from 'projects/base/src/app/components/dashboard/dashboard-base.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
