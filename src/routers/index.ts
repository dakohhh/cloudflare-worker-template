import healthRouter from "./health";
import { AutoRouter, IRequest, cors } from "itty-router";

export interface InitializeRouterOptions {
  env: Env;
}

export const initializeRouter = (options: InitializeRouterOptions) => {
  const { preflight, corsify } = cors({
    origin: options.env.CORS_ALLOWED_ORIGINS ? options.env.CORS_ALLOWED_ORIGINS.split(",") : [],
    allowHeaders: ["Authorization", "Content-Type"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });

  const router = AutoRouter<IRequest, [Env, ExecutionContext]>({
    before: [preflight],
    finally: [corsify],
  });

  healthRouter(router);

  // Add more routers here

  return router;
};
