import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/characterList/characterList..component').then(m => m.characterListComponent)

},
{
    path: 'character/:id',
    pathMatch: 'full',
    loadComponent: () => import('./components/character-details/character-details.component').then(m => m.CharacterDetailsComponent)

}];
