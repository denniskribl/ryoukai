import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Vocabulary} from '../models/vocabulary';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import {listVocabularys} from '../../../graphql/queries';
import awsconfig from '../../../aws-exports';
import {shuffle} from '../../pages/vocabulary/utils/shuffle';

API.configure(awsconfig);

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor() { }

  test(): void {
    API.graphql(graphqlOperation(listVocabularys));
  }

  listVocabularies(): Observable<Vocabulary[]> {
    return of(null).pipe(switchMap(() => from(API.graphql(graphqlOperation(listVocabularys))))).pipe(
      map(res => shuffle((res as any).data.listVocabularys.items) as Vocabulary[]),
    );
  }
}
