import { FirestoreAdapter } from "../adapters/firestore.adapter";
import { Job } from "../domain/job.entity";
import { IJOB } from "../interfaces/job";
import { BaseController } from "./base.controller";

export class JobController extends BaseController<IJOB>{
  constructor(dbAdapter = new FirestoreAdapter<IJOB>("jobs")){
    const job = new Job(dbAdapter);
    super(job);
  }
}
