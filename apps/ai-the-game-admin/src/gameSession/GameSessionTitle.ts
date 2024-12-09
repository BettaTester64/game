import { GameSession as TGameSession } from "../api/gameSession/GameSession";

export const GAMESESSION_TITLE_FIELD = "name";

export const GameSessionTitle = (record: TGameSession): string => {
  return record.name?.toString() || String(record.id);
};
