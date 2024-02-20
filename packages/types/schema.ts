export type KnownSchemaVersion =
  | '2019-02-21T00:00:00.000Z'
  | '2019-03-22T00:00:00.000Z'
  | '2019-05-16T00:00:00.000Z'
  | '2019-05-21T23:00:00.000Z'
  | '2019-05-22T00:00:00.000Z'
  | '2019-12-19T00:00:00.000Z'
  | '2020-11-17T00:30:00.000Z'
  | '2021-04-06T21:00:00.000Z'
  | '2021-07-15T13:00:00.000Z'
  | '2022-03-09T02:00:00.000Z'
  | '2022-03-23T19:00:00.000Z'

export type SchemaVersionInput =
  | KnownSchemaVersion
  | 'latest'
  | undefined;

export type SchemaAfter<Schema extends KnownSchemaVersion> =
  Schema extends '2019-02-21T00:00:00.000Z' ? '2019-02-21T00:00:00.000Z' | SchemaAfter<'2019-03-22T00:00:00.000Z'> :
  Schema extends '2019-03-22T00:00:00.000Z' ? '2019-03-22T00:00:00.000Z' | SchemaAfter<'2019-05-16T00:00:00.000Z'> :
  Schema extends '2019-05-16T00:00:00.000Z' ? '2019-05-16T00:00:00.000Z' | SchemaAfter<'2019-05-21T23:00:00.000Z'> :
  Schema extends '2019-05-21T23:00:00.000Z' ? '2019-05-21T23:00:00.000Z' | SchemaAfter<'2019-05-22T00:00:00.000Z'> :
  Schema extends '2019-05-22T00:00:00.000Z' ? '2019-05-22T00:00:00.000Z' | SchemaAfter<'2019-12-19T00:00:00.000Z'> :
  Schema extends '2019-12-19T00:00:00.000Z' ? '2019-12-19T00:00:00.000Z' | SchemaAfter<'2020-11-17T00:30:00.000Z'> :
  Schema extends '2020-11-17T00:30:00.000Z' ? '2020-11-17T00:30:00.000Z' | SchemaAfter<'2021-04-06T21:00:00.000Z'> :
  Schema extends '2021-04-06T21:00:00.000Z' ? '2021-04-06T21:00:00.000Z' | SchemaAfter<'2021-07-15T13:00:00.000Z'> :
  Schema extends '2021-07-15T13:00:00.000Z' ? '2021-07-15T13:00:00.000Z' | SchemaAfter<'2022-03-09T02:00:00.000Z'> :
  Schema extends '2022-03-09T02:00:00.000Z' ? '2022-03-09T02:00:00.000Z' | SchemaAfter<'2022-03-23T19:00:00.000Z'> :
  Schema extends '2022-03-23T19:00:00.000Z' ? '2022-03-23T19:00:00.000Z' :
  undefined
