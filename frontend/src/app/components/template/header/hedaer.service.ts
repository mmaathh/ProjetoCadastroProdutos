import { Injectable } from '@angular/core';
import {HeaderData} from './header-data.model'
import { from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HedaerService {
 private _HeaderData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routerUrl: ''
  })
  constructor() { }
  get headerData(): HeaderData{
    return this._HeaderData.value
  }
  set headerData(headerData: HeaderData){
    this._HeaderData.next(headerData)
  }
}
