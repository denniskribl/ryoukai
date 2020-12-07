/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVocabulary = /* GraphQL */ `
  mutation CreateVocabulary($input: CreateVocabularyInput!, $condition: ModelVocabularyConditionInput) {
    createVocabulary(input: $input, condition: $condition) {
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
export const updateVocabulary = /* GraphQL */ `
  mutation UpdateVocabulary($input: UpdateVocabularyInput!, $condition: ModelVocabularyConditionInput) {
    updateVocabulary(input: $input, condition: $condition) {
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
export const deleteVocabulary = /* GraphQL */ `
  mutation DeleteVocabulary($input: DeleteVocabularyInput!, $condition: ModelVocabularyConditionInput) {
    deleteVocabulary(input: $input, condition: $condition) {
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
