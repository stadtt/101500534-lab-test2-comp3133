import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)

},
{
    path: 'character',
    pathMatch: 'full',
    loadComponent: () => import('./components/character-details/character-details.component').then(m => m.CharacterDetailsComponent)

}];
