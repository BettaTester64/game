import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminRoleService } from "./adminrole.service";

@swagger.ApiTags("adminRoles")
@common.Controller("adminRoles")
export class AdminRoleController {
  constructor(protected readonly service: AdminRoleService) {}
}
