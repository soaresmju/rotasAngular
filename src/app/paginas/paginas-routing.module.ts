
import { Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';


export const RoutesInicial = [
    { 
        path: 'inicial', 
        component: InicialComponent
    }

]

export const RoutesContato = [
    { 
        path: 'contato', 
        component: ContatoComponent
    }

]

export const RoutesQuemSomos = [
    { 
        path: 'quem-somos', 
        component: QuemsomosComponent
    }

]