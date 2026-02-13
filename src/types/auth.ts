export interface User {
  email: string;
  password: string;
  registeredAt?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoggingOut: boolean;
}
