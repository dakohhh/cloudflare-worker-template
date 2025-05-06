import { initializeRouter } from "./routers";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const router = initializeRouter({ env });
    return router.fetch(request, env, ctx);
  },
};
