import { Request, Response } from 'express';
import usersService from '../services/users.service';
import responseUtils from '../utils/response.utils';

class UserControllers {
  constructor() {}

  public async getUsers(req: Request, res: Response) {
    try {
      const data = await usersService.getUsers();
      return responseUtils.successResponse(
        res,
        'Users Fetched Successfully',
        data
      );
    } catch (error) {}
  }

  public async identifyClient(req: Request, res: Response) {
    try {
      const body = req.body;
      const data = await usersService.identifyClient(body, res);
      return data;
    } catch (error) {
      responseUtils.errorResponse(
        res,
        'An error occured while identifying client'
      );
    }
  }

  public async selectWeapon(req: Request, res: Response) {
    try {
      const body = req.body;
      const data = await usersService.selectWeapon(body, res);
      return data;
    } catch (error) {
      responseUtils.errorResponse(
        res,
        'An error occured while selecting client weapon'
      );
    }
  }
}

export default new UserControllers();
