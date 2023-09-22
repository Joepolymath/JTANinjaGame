import { IUser } from '../@types/types';
import userModel from '../models/user.model';

class UserRepo {
  public async getAll(query = {}) {
    const users = await userModel.find(query);
    return users;
  }

  public async findOne(query = {}) {
    const user = await userModel.findOne(query);
    return user;
  }

  public async updateOne(query = {}, newData: IUser) {
    const newUser = await userModel.findOneAndUpdate(query, newData, {
      new: true,
    });
    return newUser;
  }

  public async insertOne(data: IUser) {
    return new userModel(data);
  }

  public async save(instance: any) {
    return await instance.save();
  }
}

export default new UserRepo();
