export interface AuthStateInterface {
  access_token: string;
  expires_in: string;
  state: string;
  token_type: string;
  auth_timestamp: string;
}

export const InitialAuthState: AuthStateInterface = {
  access_token: null,
  expires_in: null,
  state: null,
  token_type: null,
  auth_timestamp: null
};
