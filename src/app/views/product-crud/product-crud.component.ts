import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //injeção de dependência, do Router para fornecer a instância do
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create']) //navegar até a tela de criação de produtos
  }
}
