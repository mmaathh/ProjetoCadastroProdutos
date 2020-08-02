import { Component, OnInit } from '@angular/core';
import { HedaerService } from 'src/app/components/template/header/hedaer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HedaerService) { 
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routerUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
