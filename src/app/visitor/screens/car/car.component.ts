import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
 public listadoCarrito: any[];
  constructor(private carritoService: CarritoService) { 
    this.listadoCarrito = [];
  }

  ngOnInit(): void {
    this.listadoCarrito = this.carritoService.carrito;
    console.log(this.listadoCarrito);
    
  }

}
