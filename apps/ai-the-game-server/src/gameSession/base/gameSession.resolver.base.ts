/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { GameSession } from "./GameSession";
import { GameSessionCountArgs } from "./GameSessionCountArgs";
import { GameSessionFindManyArgs } from "./GameSessionFindManyArgs";
import { GameSessionFindUniqueArgs } from "./GameSessionFindUniqueArgs";
import { CreateGameSessionArgs } from "./CreateGameSessionArgs";
import { UpdateGameSessionArgs } from "./UpdateGameSessionArgs";
import { DeleteGameSessionArgs } from "./DeleteGameSessionArgs";
import { StrategyFindManyArgs } from "../../strategy/base/StrategyFindManyArgs";
import { Strategy } from "../../strategy/base/Strategy";
import { GameSessionService } from "../gameSession.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameSession)
export class GameSessionResolverBase {
  constructor(
    protected readonly service: GameSessionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameSession",
    action: "read",
    possession: "any",
  })
  async _gameSessionsMeta(
    @graphql.Args() args: GameSessionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameSession])
  @nestAccessControl.UseRoles({
    resource: "GameSession",
    action: "read",
    possession: "any",
  })
  async gameSessions(
    @graphql.Args() args: GameSessionFindManyArgs
  ): Promise<GameSession[]> {
    return this.service.gameSessions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameSession, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameSession",
    action: "read",
    possession: "own",
  })
  async gameSession(
    @graphql.Args() args: GameSessionFindUniqueArgs
  ): Promise<GameSession | null> {
    const result = await this.service.gameSession(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameSession)
  @nestAccessControl.UseRoles({
    resource: "GameSession",
    action: "create",
    possession: "any",
  })
  async createGameSession(
    @graphql.Args() args: CreateGameSessionArgs
  ): Promise<GameSession> {
    return await this.service.createGameSession({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameSession)
  @nestAccessControl.UseRoles({
    resource: "GameSession",
    action: "update",
    possession: "any",
  })
  async updateGameSession(
    @graphql.Args() args: UpdateGameSessionArgs
  ): Promise<GameSession | null> {
    try {
      return await this.service.updateGameSession({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GameSession)
  @nestAccessControl.UseRoles({
    resource: "GameSession",
    action: "delete",
    possession: "any",
  })
  async deleteGameSession(
    @graphql.Args() args: DeleteGameSessionArgs
  ): Promise<GameSession | null> {
    try {
      return await this.service.deleteGameSession(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Strategy], { name: "strategies" })
  @nestAccessControl.UseRoles({
    resource: "Strategy",
    action: "read",
    possession: "any",
  })
  async findStrategies(
    @graphql.Parent() parent: GameSession,
    @graphql.Args() args: StrategyFindManyArgs
  ): Promise<Strategy[]> {
    const results = await this.service.findStrategies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
