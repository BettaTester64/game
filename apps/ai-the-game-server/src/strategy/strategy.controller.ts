import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StrategyService } from "./strategy.service";
import { StrategyControllerBase } from "./base/strategy.controller.base";

@swagger.ApiTags("strategies")
@common.Controller("strategies")
export class StrategyController extends StrategyControllerBase {
  constructor(
    protected readonly service: StrategyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
