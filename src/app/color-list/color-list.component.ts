import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {
  @Input() options: any[];

  selected_option

  constructor(private colorService: ColorService) { 
      this.selected_option = this.colorService.getKleurValue()
   }

  ngOnInit(): void {
  }

  setKleur(){
    this.colorService.setKleur(this.selected_option)
  }

}
