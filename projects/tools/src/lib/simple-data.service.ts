import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SimpleDataService {
  get getData(): string {
    return 'Data from SimpleService'
  }
}
