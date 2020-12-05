import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { VocabularyComponent } from './pages/vocabulary/vocabulary.component';
import { KanjiComponent } from './pages/kanji/kanji.component';
import { HiraganaComponent } from './pages/hiragana/hiragana.component';
import { KatakanaComponent } from './pages/katakana/katakana.component';
import {FlipModule} from 'ngx-flip';
import { FlippableCardComponent } from './pages/vocabulary/components/flippable-card/flippable-card.component';
import { CardFrontIdentifierDirective } from './pages/vocabulary/directives/card-front-identifier.directive';
import { CardBackIdentifierDirective } from './pages/vocabulary/directives/card-back-identifier.directive';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VocabularyComponent,
    KanjiComponent,
    HiraganaComponent,
    KatakanaComponent,
    FlippableCardComponent,
    CardFrontIdentifierDirective,
    CardBackIdentifierDirective,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FlipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
