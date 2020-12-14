import { IDB } from "../interfaces/db";
import { IJOB } from "../interfaces/job";
import { BaseEntity } from "./base.entity";

export class Job extends BaseEntity<IJOB>{
  constructor(db: IDB<IJOB>) {
    super(db);
  }
}
