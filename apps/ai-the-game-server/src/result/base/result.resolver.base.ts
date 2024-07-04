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
import { Result } from "./Result";
import { ResultCountArgs } from "./ResultCountArgs";
import { ResultFindManyArgs } from "./ResultFindManyArgs";
import { ResultFindUniqueArgs } from "./ResultFindUniqueArgs";
import { CreateResultArgs } from "./CreateResultArgs";
import { UpdateResultArgs } from "./UpdateResultArgs";
import { DeleteResultArgs } from "./DeleteResultArgs";
import { Strategy } from "../../strategy/base/Strategy";
import { ResultService } from "../result.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Result)
export class ResultResolverBase {
  constructor(
    protected readonly service: ResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "read",
    possession: "any",
  })
  async _resultsMeta(
    @graphql.Args() args: ResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Result])
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "read",
    possession: "any",
  })
  async results(@graphql.Args() args: ResultFindManyArgs): Promise<Result[]> {
    return this.service.results(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Result, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "read",
    possession: "own",
  })
  async result(
    @graphql.Args() args: ResultFindUniqueArgs
  ): Promise<Result | null> {
    const result = await this.service.result(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Result)
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "create",
    possession: "any",
  })
  async createResult(@graphql.Args() args: CreateResultArgs): Promise<Result> {
    return await this.service.createResult({
      ...args,
      data: {
        ...args.data,

        strategy: args.data.strategy
          ? {
              connect: args.data.strategy,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Result)
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "update",
    possession: "any",
  })
  async updateResult(
    @graphql.Args() args: UpdateResultArgs
  ): Promise<Result | null> {
    try {
      return await this.service.updateResult({
        ...args,
        data: {
          ...args.data,

          strategy: args.data.strategy
            ? {
                connect: args.data.strategy,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Result)
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "delete",
    possession: "any",
  })
  async deleteResult(
    @graphql.Args() args: DeleteResultArgs
  ): Promise<Result | null> {
    try {
      return await this.service.deleteResult(args);
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
  @graphql.ResolveField(() => Strategy, {
    nullable: true,
    name: "strategy",
  })
  @nestAccessControl.UseRoles({
    resource: "Strategy",
    action: "read",
    possession: "any",
  })
  async getStrategy(
    @graphql.Parent() parent: Result
  ): Promise<Strategy | null> {
    const result = await this.service.getStrategy(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
