import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HedaerService } from 'src/app/components/template/header/hedaer.service';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private HeaderService: HedaerService) {
    HeaderService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
   }

  ngOnInit(): void {
  }
navigateToProductCreate(): void{
  this.router.navigate(['/products/create'])  
}
}
