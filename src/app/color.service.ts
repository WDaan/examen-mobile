import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private kleur = new BehaviorSubject<Object>(null)

  constructor() {
  }

  getKleur(): Observable<Object> {
    return this.kleur.asObservable()
  }

  getKleurValue(){
    return this.kleur.value
  }

  setKleur(value: Object): void {
    this.kleur.next(value)
  }
}
