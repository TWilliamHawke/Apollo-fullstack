/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostQuerry
// ====================================================

export interface GetAllPostQuerry_getAllPosts {
  __typename: "Post";
  author: string;
  title: string;
  content: string;
  createdAt: any | null;
  _id: string;
}

export interface GetAllPostQuerry {
  getAllPosts: GetAllPostQuerry_getAllPosts[] | null;
}
