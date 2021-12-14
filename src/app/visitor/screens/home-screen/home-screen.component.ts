import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  public listProduct: Product[];
  constructor(private router: Router,) {
    this.listProduct = [];
   }

  ngOnInit() {
    this.listProduct = this.listProducts
  }
  goToViewProduct(id : string) {
    this.router.navigateByUrl(`visitor/verProducto/${id}`);
  }

  listProducts = [
    {
      id: '1',
      title: 'Apple',
      Subtitle: 'Iphone 11',
      description: 'Cámara principal: 12MP. Cámara frontal: 12MP. Tamaño de la pantalla: 6.1 pulgadas. Memoria interna: 128GB. Núcleos del procesador: Hexa Core.',
      price: '809.990',
      recomendations: ['Apple Airpods', 'Cargador Iphone 12', 'Cargador Apple MAGSAFE'],
      image:'assets/images/1.png',
    },
    {
      id: '2',
      title: 'Samsung',
      Subtitle: 'Galaxy S21 Ultra',
      description: 'Alarma: Sí. Hecho en: Vietnam. Tipo: Smartphones. Ajuste del brillo: Sí. Duración aproximada de la batería: Hasta 40 horas.',
      price: '1.579.980',
      recomendations: ['Galaxy Buds', 'Galaxy Watch4 Classic46', 'Galaxy Watch4 Classic42'],
      image:'assets/images/2.jpg',
    },
    {
      id: '3',
      title: 'Samsung',
      Subtitle: 'SAMSUNG GALAXY A80 128GB NEGRO',
      description: 'Maravíllate con la tecnología, usabilidad y conectividad a gran escala que te dará el Smartphone Galaxy A80 de Samsung. Una herramienta de trabajo. Un punto de comunicación y entretención para tu día a día.',
      price: '549.990',
      recomendations: ['A7 Galaxy Samsung', 'Samsung Galaxy a02', 'Samsung 128gb usb'],
      image:'assets/images/3.jpg',
    },
    {
      id: '4',
      title: 'HUAWEI',
      Subtitle: 'HUAWEI P40 lite',
      description: 'Cámara Cuádruple IA de 48 MP | HUAWEI SuperCharge de 40 W | Procesador Kirin 810 de 7nm',
      price: '299.990',
      recomendations: ['Huawei Watch 3', 'Huawei FreeBuds 4', 'Huawei MatePad 11'],
      image:'assets/images/4.jpg',
    },
    {
      id: '5',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '6',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '7',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '8',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '9',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '10',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '11',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
    {
      id: '12',
      title: 'Apple',
      Subtitle: 'iphone 11 64GB Blanco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '529.000',
      recomendations: ['intel', 'Notebook', 'intel core'],
      image:'assets/images/5.jpg',
    },
  ]
}
