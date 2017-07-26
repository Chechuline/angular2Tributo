import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component'
import { BandDetailsComponent } from './pages/band-details/band-details.component'
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component'

export const routes: Routes = [
    { path: 'the-rolling-stones', component:BandDetailsComponent },
    { path: 'the-beatles', component:BandDetailsComponent },
    { path: 'queen', component:BandDetailsComponent },
    { path: 'foo', component: UnderConstructionComponent},
    { path: 'bar', component: UnderConstructionComponent},
    { path: '**', redirectTo:''}
];

export const RUTAS_APP = RouterModule.forRoot(routes);
