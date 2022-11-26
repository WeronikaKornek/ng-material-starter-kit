export interface UserModel {
  readonly id: number;
  readonly email: string;
  readonly  name: { firstname: string, lastname: string }

}
