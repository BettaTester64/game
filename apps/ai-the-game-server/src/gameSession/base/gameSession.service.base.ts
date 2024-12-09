/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  GameSession as PrismaGameSession,
  Strategy as PrismaStrategy,
} from "@prisma/client";
import { GameSessionCreateInput } from "./GameSessionCreateInput";
import { GameSession } from "./GameSession";
import { DeleteGameSessionArgs } from "./DeleteGameSessionArgs";
import { GameSessionWhereUniqueInput } from "./GameSessionWhereUniqueInput";
import { GameSessionFindManyArgs } from "./GameSessionFindManyArgs";
import { GameSessionUpdateInput } from "./GameSessionUpdateInput";

export class GameSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GameSessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gameSession.count(args);
  }

  async gameSessions(
    args: Prisma.GameSessionFindManyArgs
  ): Promise<PrismaGameSession[]> {
    return this.prisma.gameSession.findMany(args);
  }
  async gameSession(
    args: Prisma.GameSessionFindUniqueArgs
  ): Promise<PrismaGameSession | null> {
    return this.prisma.gameSession.findUnique(args);
  }
  async createGameSession(
    args: Prisma.GameSessionCreateArgs
  ): Promise<PrismaGameSession> {
    return this.prisma.gameSession.create(args);
  }
  async updateGameSession(
    args: Prisma.GameSessionUpdateArgs
  ): Promise<PrismaGameSession> {
    return this.prisma.gameSession.update(args);
  }
  async deleteGameSession(
    args: Prisma.GameSessionDeleteArgs
  ): Promise<PrismaGameSession> {
    return this.prisma.gameSession.delete(args);
  }

  async findStrategies(
    parentId: string,
    args: Prisma.StrategyFindManyArgs
  ): Promise<PrismaStrategy[]> {
    return this.prisma.gameSession
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .strategies(args);
  }
  async CreateGameSession(args: GameSessionCreateInput): Promise<GameSession> {
    throw new Error("Not implemented");
  }
  async DeleteGameSession(args: DeleteGameSessionArgs): Promise<GameSession> {
    throw new Error("Not implemented");
  }
  async GetGameSessionById(
    args: GameSessionWhereUniqueInput
  ): Promise<GameSession> {
    throw new Error("Not implemented");
  }
  async ListGameSessions(
    args: GameSessionFindManyArgs[]
  ): Promise<GameSession[]> {
    throw new Error("Not implemented");
  }
  async UpdateGameSession(args: GameSessionUpdateInput): Promise<GameSession> {
    throw new Error("Not implemented");
  }
}
