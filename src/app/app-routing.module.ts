import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesInicial, RoutesContato, RoutesQuemSomos } from './paginas/paginas-routing.module';


export const rotas = [
    { path: 'index', pathMatch: 'full', redirectTo: 'localhost:4200' },
    ...RoutesInicial,
    ...RoutesContato,
    ...RoutesQuemSomos
    
    
]
/*
    Criação do modulo para gerenciar as rotas da aplicação angular
*/
@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }