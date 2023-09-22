export interface IUser {
  _id?: string;
  nickname?: string;
  walletAddress?: string;
  isOnline?: boolean;
  battleMeta?: {
    description: string;
    id: string;
    attributes: string[];
  };
  battleLog?: any[];
  notification_BattleRequest?: any;
}

export interface IEnv {
  PORT: string;
  DB_URI: string;
  NODE_ENV: string;
  API_KEY: string;
}
