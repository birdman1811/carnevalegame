import { NgtUniversalModule } from '@ng-toolkit/universal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { LayoutModule } from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { FactionsComponent } from './factions/factions.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { AppRoutingModule } from './/app-routing.module';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { GuildComponent } from './guild/guild.component';
import { RashaarComponent } from './rashaar/rashaar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatriciansComponent } from './patricians/patricians.component';
import { VaticanComponent } from './vatican/vatican.component';
import { StrigoiComponent } from './strigoi/strigoi.component';
import { GiftedComponent } from './gifted/gifted.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterstatcardsComponent } from './characterstatcards/characterstatcards.component'





@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    IntroComponent,
    FactionsComponent,
    AboutComponent,
    ResourcesComponent,
    GettingstartedComponent,
    GuildComponent,
    RashaarComponent,
    DoctorsComponent,
    PatriciansComponent,
    VaticanComponent,
    StrigoiComponent,
    GiftedComponent,
    CharacterstatcardsComponent,
    FooterComponent,
    
    
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    MatExpansionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    PortalModule,
  ],
  providers: [],
})
export class AppModule { }


