import * as graphql from "@nestjs/graphql";
import { AdminRoleService } from "./adminrole.service";

export class AdminRoleResolver {
  constructor(protected readonly service: AdminRoleService) {}
}
