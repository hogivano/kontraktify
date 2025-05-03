export interface IUser {
  id: string;
  email: string;
  email_confirmed_at: string | null;
  phone: string | null;
  confirmed_at: string | null;
  last_sign_in_at: string | null;
  app_metadata: {
    provider: string;
    providers: string[];
    roles: string[];
  };
  user_metadata: {
    full_name: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
}

class User implements IUser {
  public readonly id: string;
  public readonly email: string;
  public readonly email_confirmed_at: string | null;
  public readonly phone: string | null;
  public readonly confirmed_at: string | null;
  public readonly last_sign_in_at: string | null;
  public readonly app_metadata: {
    provider: string;
    providers: string[];
    roles: string[];
  };
  public readonly user_metadata: {
    full_name: string;
    avatar_url: string;
  };
  public readonly created_at: string;
  public readonly updated_at: string;

  constructor(userData: IUser) {
    this.id = userData.id;
    this.email = userData.email;
    this.email_confirmed_at = userData.email_confirmed_at;
    this.phone = userData.phone;
    this.confirmed_at = userData.confirmed_at;
    this.last_sign_in_at = userData.last_sign_in_at;
    this.app_metadata = userData.app_metadata;
    this.user_metadata = userData.user_metadata;
    this.created_at = userData.created_at;
    this.updated_at = userData.updated_at;
  }
}

export default User;
