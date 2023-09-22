import { Response } from 'express';
import usersDataRepo from '../dataAccess/users.dataRepo';
import { IUser } from '../@types/types';
import responseUtils from '../utils/response.utils';

class UsersServices {
  public async getUsers() {
    try {
      const data = await usersDataRepo.getAll();
      return data;
    } catch (error) {}
  }

  public async identifyClient(payload: IUser, res: Response) {
    try {
      const foundClient = await usersDataRepo.findOne({
        walletAddress: payload.walletAddress,
      });
      if (!foundClient) {
        const newClientInstance = await usersDataRepo.insertOne(payload);
        const newClient = await usersDataRepo.save(newClientInstance);
        const data = newClient;
        data.isNicknameAvailable = true;
        return responseUtils.successResponse(
          res,
          'New Client Saved and Identified',
          data
        );
      }

      const updatedClient = await usersDataRepo.updateOne(
        { walletAddress: foundClient.walletAddress },
        { isOnline: true }
      );

      const data: any = updatedClient;
      data.isNicknameAvailable = true;

      return responseUtils.successResponse(
        res,
        'Client Identified Successfully',
        data
      );
    } catch (error: any) {
      console.log({ error });
      return responseUtils.errorResponse(res, error.message);
    }
  }
  public async selectWeapon(payload: IUser, res: Response) {
    try {
      const foundClient = await usersDataRepo.findOne({
        walletAddress: payload.walletAddress,
      });
      if (!foundClient) {
        return responseUtils.badRequestResponse(res, 'Client not found');
      }

      const updatedClient = await usersDataRepo.updateOne(
        { walletAddress: foundClient.walletAddress },
        { battleMeta: payload.battleMeta }
      );

      const data: any = updatedClient;
      data.isNicknameAvailable = true;

      return responseUtils.successResponse(
        res,
        'Client Weapon Selected Successfully',
        data
      );
    } catch (error: any) {
      console.log(error);
      return responseUtils.errorResponse(res, error.message);
    }
  }
}

export default new UsersServices();
