// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace HelloWorldTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  /** get */
  getIncorrectSingleValue?: Maybe<incorrectSingleValue>;
  /** get */
  getIncorrectInteger?: Maybe<incorrectInteger>;
  /** get */
  getCorrect?: Maybe<correctNormal>;
};

export type incorrectSingleValue =
  | 'SINGLEVALUE';

/** Expected @enum directive to be removed by federation transformer for v1 */
export type incorrectInteger =
  | '_0'
  | '_1';

/** Works as expected */
export type correctNormal =
  | 'FIRSTVALUE'
  | 'SECONDVALUE';

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** get **/
  getIncorrectSingleValue: InContextSdkMethod<Query['getIncorrectSingleValue'], {}, MeshContext>,
  /** get **/
  getIncorrectInteger: InContextSdkMethod<Query['getIncorrectInteger'], {}, MeshContext>,
  /** get **/
  getCorrect: InContextSdkMethod<Query['getCorrect'], {}, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Hello World"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
