import { Component } from '@angular/core'
import { ColorService } from './color.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular'
  options = []

  constructor(private colorService: ColorService) {
    this.colorService.getOpties().subscribe((newOptions: any) => {
      this.options = newOptions
    })
  }
}
