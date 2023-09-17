type LifeCycleStageType =
  | "subscriber"
  | "lead"
  | "marketingqualifiedlead"
  | "salesqualifiedlead"
  | "opportunity"
  | "customer"
  | "evangelist"
  | "other";

interface IProperties {
  createdate: string;
  email: string;
  firstname: string;
  hs_object_id: string;
  lastmodifieddate: string;
  lastname: string;
  lifecyclestage: LifeCycleStageType;
  phone: string;
  country: string;
  [key: string]: any;
}
export interface IContact {
  id: string;
  properties: IProperties;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}

export type contactDatabaseValuesType = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];
