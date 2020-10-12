import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { SpanishComponent } from './spanish/spanish.component';
import { FirestoreSettingsToken } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SpanishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  providers: [
    {
      provide: FirestoreSettingsToken,
      useValue: {}
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
