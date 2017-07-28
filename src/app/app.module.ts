import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonpModule } from '@angular/http'

// my-components
import { RUTAS_APP } from './app.routes';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { BandDetailsComponent } from './pages/band-details/band-details.component';
import { QueenComponent } from './pages/queen/queen.component';
import { RollingComponent } from './pages/rolling/rolling.component';
import { BeatlesComponent } from './pages/beatles/beatles.component';

// my-services
import { WikiService } from './wiki.service';


@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    BandDetailsComponent,
    QueenComponent,
    RollingComponent,
    BeatlesComponent,
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    RUTAS_APP,
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
