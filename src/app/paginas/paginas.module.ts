import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './components/inicial/inicial.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';
import { ContatoComponent } from './components/contato/contato.component';



@NgModule({
  declarations: [InicialComponent, QuemsomosComponent, ContatoComponent],
  imports: [
    CommonModule
  ],
  exports:
  [
    InicialComponent,
    QuemsomosComponent,
    ContatoComponent
  ]
})
export class PaginasModule { }
