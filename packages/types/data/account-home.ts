import type { SchemaAfter, SchemaVersion } from "../schema";

export type AccountHomeCat<Schema extends SchemaVersion> =
  Schema extends undefined ? AccountHomeCat_Base :
  Schema extends SchemaAfter<'2019-03-22T00:00:00.000Z'> ? number :
  AccountHomeCat_Base;

interface AccountHomeCat_Base {
  id: number;

  hint: string;
}
