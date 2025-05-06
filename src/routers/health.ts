import { RouterType } from "itty-router";
import HealthController from "../health/health.controller";

export default (router: RouterType) => {
  router.get("/health", HealthController.getHealth);
};
