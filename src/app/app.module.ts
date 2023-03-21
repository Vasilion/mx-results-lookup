import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiderLookupComponent } from './rider-lookup/rider-lookup.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { IonicModule } from '@ionic/angular';
import { HelpGuideComponent } from './help-guide/help-guide.component';
import { AmaRulesIndexComponent } from './ama-rules-index/ama-rules-index.component';


@NgModule({
  declarations: [
    AppComponent,
    RiderLookupComponent,
    RiderProfileComponent,
    HelpGuideComponent,
    AmaRulesIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    MatCardModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
