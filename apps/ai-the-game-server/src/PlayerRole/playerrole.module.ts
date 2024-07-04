import { Module } from "@nestjs/common";
import { PlayerRoleService } from "./playerrole.service";
import { PlayerRoleController } from "./playerrole.controller";
import { PlayerRoleResolver } from "./playerrole.resolver";

@Module({
  controllers: [PlayerRoleController],
  providers: [PlayerRoleService, PlayerRoleResolver],
  exports: [PlayerRoleService],
})
export class PlayerRoleModule {}
