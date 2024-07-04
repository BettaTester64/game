import { Module } from "@nestjs/common";
import { AdminRoleService } from "./adminrole.service";
import { AdminRoleController } from "./adminrole.controller";
import { AdminRoleResolver } from "./adminrole.resolver";

@Module({
  controllers: [AdminRoleController],
  providers: [AdminRoleService, AdminRoleResolver],
  exports: [AdminRoleService],
})
export class AdminRoleModule {}
