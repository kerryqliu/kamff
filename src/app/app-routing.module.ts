import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {MissionComponent} from './mission/mission.component';

const routes: Routes = [{path: 'Home', component: MainComponent},
                        {path: 'About Us', component: AboutComponent},
                        {path: 'Our Mission', component: MissionComponent},
                        {path: '', redirectTo: '/Home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
