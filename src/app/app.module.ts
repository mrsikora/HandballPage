import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const config = environment.config;

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
   // AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    //  modules needed to schedule, gallery
    NgbModule.forRoot(),
    NgProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
