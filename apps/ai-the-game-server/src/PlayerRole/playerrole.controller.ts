import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlayerRoleService } from "./playerrole.service";

@swagger.ApiTags("playerRoles")
@common.Controller("playerRoles")
export class PlayerRoleController {
  constructor(protected readonly service: PlayerRoleService) {}
}
