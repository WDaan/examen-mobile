import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-square',
  templateUrl: './color-square.component.html',
  styleUrls: ['./color-square.component.scss']
})
export class ColorSquareComponent implements OnInit {

  color: string;

  constructor(private colorService: ColorService) {
    this.colorService.getKleur().subscribe((newKleur: any) => {
      this.color = newKleur.color
    })
  }

  ngOnInit(): void {
  }

}
