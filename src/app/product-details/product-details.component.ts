import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  
product : Product | undefined;

constructor (private route: ActivatedRoute, private cartService: CartService) {};

ngOnInit(){
//Getting product Id from the current route
const routeParams = this.route.snapshot.paramMap;

const productIDfromRoute = Number(routeParams.get('productId'));
//console.log(productIDfromRoute);

//Finding the product that corresponding to the 'Id'
this.product = products.find(product => product.id === productIDfromRoute)

}

addToCart(product: Product){
  this.cartService.addToCart(product);
  alert('Your product has been added to the cart..!!')
}

}
