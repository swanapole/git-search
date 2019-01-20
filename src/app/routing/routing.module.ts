import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { GitProfileComponent } from '../git-profile/git-profile.component';
import { IntroComponent } from '../intro/intro.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes:Routes = [
  {path:"git-profile",component:GitProfileComponent},
  {path:"intro",component:IntroComponent},
  {path:"",redirectTo:"/intro",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
