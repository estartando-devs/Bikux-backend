import { JobController } from "../controllers/job.controller";
import { IJOB } from "../interfaces/job";
import { BaseFirebaseFunctionRouter } from "./baseFirebaseFunction.router";

export class JobRouters extends BaseFirebaseFunctionRouter<IJOB> {
  constructor(jobController = new JobController()) {
    super(jobController);
  }
}
