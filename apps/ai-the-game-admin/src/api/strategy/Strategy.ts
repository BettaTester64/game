import { GameSession } from "../gameSession/GameSession";
import { Player } from "../player/Player";
import { Result } from "../result/Result";
import { Scenario } from "../scenario/Scenario";

export type Strategy = {
  createdAt: Date;
  description: string | null;
  gameSession?: GameSession | null;
  id: string;
  player?: Player | null;
  results?: Array<Result>;
  scenario?: Scenario | null;
  updatedAt: Date;
};
