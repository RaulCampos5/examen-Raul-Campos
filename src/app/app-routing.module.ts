import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor/inicio',
    pathMatch: 'full',
  },
  { 
    path: 'visitor',   
    loadChildren: () => 
      import('./visitor/visitor.module').then(
        (VisitorModule) => VisitorModule.VisitorModule), 
  },
  { 
    path: '**',     
    redirectTo: 'visitor/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
