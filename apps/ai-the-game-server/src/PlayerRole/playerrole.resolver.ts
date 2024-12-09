import * as graphql from "@nestjs/graphql";
import { PlayerRoleService } from "./playerrole.service";

export class PlayerRoleResolver {
  constructor(protected readonly service: PlayerRoleService) {}
}
