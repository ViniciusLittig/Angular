import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'Home',
    routeUrl: ''
  })

  constructor() { }
}
