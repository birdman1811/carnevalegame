import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component'
import { FactionsComponent } from './factions/factions.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { GuildComponent } from './guild/guild.component';
import { RashaarComponent } from './rashaar/rashaar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatriciansComponent } from './patricians/patricians.component';
import { VaticanComponent } from './vatican/vatican.component';
import { StrigoiComponent } from './strigoi/strigoi.component';
import { GiftedComponent } from './gifted/gifted.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'home', component: IntroComponent},
  {path: 'factions', component: FactionsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'gettingstarted', component: GettingstartedComponent},
  {path: 'guild', component: GuildComponent},
  {path: 'rashaar', component: RashaarComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'patricians', component: PatriciansComponent},
  {path: 'vatican', component: VaticanComponent},
  {path: 'strigoi', component: StrigoiComponent},
  {path: 'gifted', component: GiftedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
