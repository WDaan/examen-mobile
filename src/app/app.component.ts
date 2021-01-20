import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular'
  options = [
    {
      name: 'red',
      color: 'bg-red-500'
    },
    {
      name: 'green',
      color: 'bg-green-500'
    },
    {
      name: 'blue',
      color: 'bg-blue-600'
    },
    {
      name: 'teal',
      color: 'bg-teal-500'
    },
  ]
  selected_option = this.options[0]

  bereken() {
    console.log(this.selected_option)
  }
}
