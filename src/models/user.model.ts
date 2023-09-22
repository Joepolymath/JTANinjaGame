import mongoose from 'mongoose';
import { IUser } from '../@types/types';

const userSchema = new mongoose.Schema<IUser>({
  nickname: {
    type: String,
    unique: true,
  },
  walletAddress: {
    type: String,
    unique: true,
    index: true,
  },
  isOnline: {
    type: Boolean,
  },
  battleMeta: {
    description: String,
    id: String,
    attributes: [
      {
        trait_type: String,
        value: String,
      },
    ],
  },
  battleLog: [],
  notification_BattleRequest: {
    challengers: [
      {
        nickname: String,
        walletAddress: String,
      },
    ],

    acceptedChallengers: [
      {
        nickname: String,
        opponent: String,
        battleScene: String,
        opponentWallet: String,
      },
    ],
  },
});

export default mongoose.model<IUser>('User', userSchema);
