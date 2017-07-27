import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonpModule } from '@angular/http'

// my-components
import { RUTAS_APP } from './app.routes';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { BandDetailsComponent } from './pages/band-details/band-details.component';

// my-services
import { WikiService } from './wiki.service'

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    BandDetailsComponent,
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
