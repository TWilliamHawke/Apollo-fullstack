/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThisPost
// ====================================================

export interface GetThisPost_getPostById {
  __typename: "Post";
  title: string;
  author: string;
  createdAt: any | null;
  content: string;
}

export interface GetThisPost {
  getPostById: GetThisPost_getPostById | null;
}

export interface GetThisPostVariables {
  id: string;
}
