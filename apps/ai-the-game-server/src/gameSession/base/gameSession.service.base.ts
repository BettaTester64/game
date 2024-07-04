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
}
