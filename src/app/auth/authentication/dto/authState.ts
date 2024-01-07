export class AuthState {
  accessToken: string | null;
  user: {
    username: string | null;
    permissions: {
      roles: string[];
      perms: string[];
    } | null;
    email: string | null;
    createdAt: string | null,
  }
  isLoading: boolean;
}
