/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVocabulary = /* GraphQL */ `
  query GetVocabulary($id: ID!) {
    getVocabulary(id: $id) {
      id
      jp
      de
      romaji
      furigana
      en
      createdAt
      updatedAt
    }
  }
`;
export const listVocabularys = /* GraphQL */ `
  query ListVocabularys($filter: ModelVocabularyFilterInput, $limit: Int, $nextToken: String) {
    listVocabularys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        jp
        de
        romaji
        furigana
        en
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
