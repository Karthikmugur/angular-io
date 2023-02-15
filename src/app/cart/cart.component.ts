import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService, private formBuilder: FormBuilder){}

  items = this.cartService.getItems();

  checkOutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  onSubmit(): void{
    //Process checkout data here
    this.items = this.cartService.clearCart();
    alert('Your order has been submitted - '+ this.checkOutForm.value.name + " - " + this.checkOutForm.value.address);
    this.checkOutForm.reset();
  }
}
