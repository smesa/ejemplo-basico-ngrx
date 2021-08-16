import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { AsistentesListComponent } from './components/asistentes-list/asistentes-list.component';
import { AsistentesCounterComponent } from './components/asistentes-counter/asistentes-counter.component';
import { appReducers } from './stores/reducers';
import { AsistentesFacade } from './facades/asistentes.facade';

@NgModule({
  declarations: [
    AppComponent,
    AsistentesListComponent,
    AsistentesCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [
    AsistentesFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
