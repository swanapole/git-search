
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { GhProfileService } from './gh-profile.service';
import { IntroComponent } from './intro/intro.component';
import { RoutingModule } from './routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoldenPipe } from './bolden.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitProfileComponent,
    IntroComponent,
    PageNotFoundComponent,
    BoldenPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpModule,
    FormsModule,
    RoutingModule
  ],
  providers: [GhProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
