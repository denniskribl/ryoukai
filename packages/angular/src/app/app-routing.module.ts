import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VocabularyComponent } from './pages/vocabulary/vocabulary.component';
import { KanjiComponent } from './pages/kanji/kanji.component';
import { HiraganaComponent } from './pages/hiragana/hiragana.component';
import { KatakanaComponent } from './pages/katakana/katakana.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vokabeln',
    component: VocabularyComponent,
  },
  {
    path: 'kanji',
    component: KanjiComponent,
  },
  {
    path: 'hiragana',
    component: HiraganaComponent,
  },
  {
    path: 'katakana',
    component: KatakanaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
