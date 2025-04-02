import { Component } from '@angular/core';
import { Products } from '../../interfaces/Products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-service-product',
  imports: [],
  templateUrl: './productservice.component.html',
  styleUrl: './productservice.component.css',
})
export class ServiceComponent {
  productList: Products | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe((data: Products) => {
      this.productList = data;
    });
  }
}
