import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
        path:'body', 
        loadComponent: ()=>import('./components/body/body.component').then(c=>c.BodyComponent)
    },
    {
        path:'', 
        redirectTo: '/body',
        pathMatch: 'full'
    },//si no existe la ruta, es erroneo
    {
        path:'**', 
        loadComponent: ()=>import('./components/pagina404/pagina404.component').then(c=>c.Pagina404Component)
    },
];
