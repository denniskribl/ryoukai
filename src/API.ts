/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVocabularyInput = {
  id?: string | null,
  jp: string,
  de: string,
  romaji?: string | null,
  furigana?: string | null,
  en?: string | null,
};

export type ModelVocabularyConditionInput = {
  jp?: ModelStringInput | null,
  de?: ModelStringInput | null,
  romaji?: ModelStringInput | null,
  furigana?: ModelStringInput | null,
  en?: ModelStringInput | null,
  and?: Array< ModelVocabularyConditionInput | null > | null,
  or?: Array< ModelVocabularyConditionInput | null > | null,
  not?: ModelVocabularyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateVocabularyInput = {
  id: string,
  jp?: string | null,
  de?: string | null,
  romaji?: string | null,
  furigana?: string | null,
  en?: string | null,
};

export type DeleteVocabularyInput = {
  id?: string | null,
};

export type ModelVocabularyFilterInput = {
  id?: ModelIDInput | null,
  jp?: ModelStringInput | null,
  de?: ModelStringInput | null,
  romaji?: ModelStringInput | null,
  furigana?: ModelStringInput | null,
  en?: ModelStringInput | null,
  and?: Array< ModelVocabularyFilterInput | null > | null,
  or?: Array< ModelVocabularyFilterInput | null > | null,
  not?: ModelVocabularyFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateVocabularyMutationVariables = {
  input: CreateVocabularyInput,
  condition?: ModelVocabularyConditionInput | null,
};

export type CreateVocabularyMutation = {
  createVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVocabularyMutationVariables = {
  input: UpdateVocabularyInput,
  condition?: ModelVocabularyConditionInput | null,
};

export type UpdateVocabularyMutation = {
  updateVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVocabularyMutationVariables = {
  input: DeleteVocabularyInput,
  condition?: ModelVocabularyConditionInput | null,
};

export type DeleteVocabularyMutation = {
  deleteVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVocabularyQueryVariables = {
  id: string,
};

export type GetVocabularyQuery = {
  getVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVocabularysQueryVariables = {
  filter?: ModelVocabularyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVocabularysQuery = {
  listVocabularys:  {
    __typename: "ModelVocabularyConnection",
    items:  Array< {
      __typename: "Vocabulary",
      id: string,
      jp: string,
      de: string,
      romaji: string | null,
      furigana: string | null,
      en: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateVocabularySubscription = {
  onCreateVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVocabularySubscription = {
  onUpdateVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVocabularySubscription = {
  onDeleteVocabulary:  {
    __typename: "Vocabulary",
    id: string,
    jp: string,
    de: string,
    romaji: string | null,
    furigana: string | null,
    en: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
