import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StrategyModuleBase } from "./base/strategy.module.base";
import { StrategyService } from "./strategy.service";
import { StrategyController } from "./strategy.controller";
import { StrategyResolver } from "./strategy.resolver";

@Module({
  imports: [StrategyModuleBase, forwardRef(() => AuthModule)],
  controllers: [StrategyController],
  providers: [StrategyService, StrategyResolver],
  exports: [StrategyService],
})
export class StrategyModule {}
