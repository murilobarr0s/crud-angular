import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //injeção de dependência, do Router para fornecer a instância do
  constructor(private router : Router, private headerService : HeaderService) {
    headerService.headerData = {
      title : 'Cadastro de Produtos',
      icon:'storefront',
      routerUrl:'/products'
    }
   }

  ngOnInit(): void {
  }
  
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create']) //navegar até a tela de criação de produtos
  }
}
