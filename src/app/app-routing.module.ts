import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// eslint-disable-next-line max-len
const routes: Routes = 
[
  {path:'', redirectTo: 'personajes', pathMatch: 'full'},
 // eslint-disable-next-line max-len
 { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
 
 { path: 'episodios', loadChildren: () => import('./pages/episodios/episodios.module').then(m => m.EpisodiosModule) }, 

 { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) },

 // eslint-disable-next-line max-len
 { path: 'personajes-detalles/:id', loadChildren: () => import('./pages/personajes-detalles/personajes-detalles.module').then(m => m.PersonajesDetallesModule) }, 

 { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },

 { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
