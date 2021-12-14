import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './screens/car/car.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ViewProductComponent } from './screens/view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'inicio',component: HomeScreenComponent
      },
      {
        path: 'verProducto/:id',component: ViewProductComponent
      },
      {
        path: 'carrito',component: CarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
