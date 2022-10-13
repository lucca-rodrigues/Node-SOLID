export interface IUsersRepository {
  findAll(): Promise<any>;
  save(data: any): Promise<any>;
}
