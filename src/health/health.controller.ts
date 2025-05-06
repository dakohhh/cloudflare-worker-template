import { HttpResponse } from "../common/utils/response";
import { IRequest } from "itty-router";
import { StatusCodes as HttpStatus } from "http-status-codes";

class HealthController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHealth(request: IRequest, env: Env, ctx: ExecutionContext) {
    console.log(env.AUTH_TOKEN);
    return new HttpResponse(`Get health check successfully with ${env.AUTH_TOKEN}`, null, HttpStatus.OK);
  }
}

export default new HealthController();
