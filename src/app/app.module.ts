import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RUTAS_APP } from './app.routes';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { BandDetailsComponent } from './pages/band-details/band-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    BandDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RUTAS_APP,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
