import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private kleur = new BehaviorSubject<Object>(null)
  private opties = new BehaviorSubject<Object[]>([
    {
      name: 'red',
      color: '#EF4444'
    },
    {
      name: 'green',
      color: '#10B981'
    },
    {
      name: 'blue',
      color: '#2563EB'
    },
    {
      name: 'teal',
      color: '#14B8A6'
    },
  ])

  constructor() {
    this.kleur.next(this.opties.value[0])
  }

  getKleur(): Observable<Object> {
    return this.kleur.asObservable()
  }

  getKleurValue() {
    return this.kleur.value
  }

  setKleur(value: Object): void {
    this.kleur.next(value)
  }

  getOpties(): Observable<Object[]> {
    return this.opties.asObservable()
  }

  addOptie(optie: Object){
    this.opties.next([...this.opties.value, optie])
  }
}
