import { https, Request, Response } from "firebase-functions";
import * as db from "firebase-admin";

import { UserRouters } from "./Routers/user.routers";
import { JobRouters } from "./Routers/job.routers";

db.initializeApp();

const jobRouters = new JobRouters();
const userRouters = new UserRouters();

export const users = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await userRouters.execute(request, response);
  }
);

export const jobs = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await jobRouters.execute(request, response);
  }
);
