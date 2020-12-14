import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VocabularyService } from '../../shared/services/vocabulary.service';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Vocabulary } from '../../shared/models/vocabulary';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { FlippableCardComponent } from './components/flippable-card/flippable-card.component';
import { shuffle } from './utils/shuffle';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent implements OnInit, OnDestroy {
  constructor(private vocabularyService: VocabularyService) {}

  counter$ = new BehaviorSubject(0);
  destroyed$ = new Subject();
  vocabularies$: Observable<Vocabulary[]> = this.vocabularyService.listVocabularies();
  showSettings = false;
  showSimplified = true;
  showRomaji = true;
  jpToGer = true;

  private max: number;

  currentVocabulary$ = combineLatest([this.counter$, this.vocabularies$]).pipe(
    switchMap(([index, vocabularies]) => of(vocabularies[index])),
    takeUntil(this.destroyed$)
  );

  @ViewChild(FlippableCardComponent)
  card: FlippableCardComponent;

  ngOnInit(): void {
    this.vocabularies$.subscribe((v) => (this.max = v.length));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  next(): void {
    if (this.counter$.value + 1 === this.max) {
      return;
    }
    if (this.card.flip) {
      this.card.flip = false;
      setTimeout(() => {
        this.counter$.next(this.counter$.value + 1);
      }, 320);
    } else {
      this.counter$.next(this.counter$.value + 1);
    }
  }

  back(): void {
    if (this.counter$.value === 0) {
      return;
    }
    if (this.card.flip) {
      this.card.flip = false;
      setTimeout(() => {
        this.counter$.next(this.counter$.value - 1);
      }, 900);
    } else {
      this.counter$.next(this.counter$.value - 1);
    }
  }
}
