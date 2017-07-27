import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { BandDetailsComponent } from './pages/band-details/band-details.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { QueenComponent } from './pages/queen/queen.component';
import { RollingComponent } from './pages/rolling/rolling.component';
import { BeatlesComponent } from './pages/beatles/beatles.component';

export const routes: Routes = [
    { path: 'the-rolling-stones', component:RollingComponent },
    { path: 'the-beatles', component:BeatlesComponent },
    { path: 'queen', component:QueenComponent },
    { path: 'foo', component: UnderConstructionComponent},
    { path: 'bar', component: UnderConstructionComponent},
    { path: '**', redirectTo:''}
];

export const RUTAS_APP = RouterModule.forRoot(routes);
