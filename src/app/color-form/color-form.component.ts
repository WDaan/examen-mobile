import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {
  color_r: string;
  color_g: string;
  color_b: string;
  color_name: string = '';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
  }

  saveKleur() {
    const rgb = `rgb(${this.color_r}, ${this.color_g}, ${this.color_b})`
    const kleur = {
      name: this.color_name,
      color: rgb
    }
    this.colorService.addOptie(kleur)
  }
}
