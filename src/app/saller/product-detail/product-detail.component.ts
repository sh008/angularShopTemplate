import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId:number|string;
  constructor(private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') || -1;
  }

}
