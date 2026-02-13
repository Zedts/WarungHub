import { User } from "../types/auth";

const AUTH_KEY = "warunghub-auth";

export const storage = {
  saveUser(user: User): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } catch (error) {
      console.error("Failed to save user to localStorage:", error);
    }
  },

  getUser(): User | null {
    if (typeof window === "undefined") return null;
    try {
      const data = localStorage.getItem(AUTH_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Failed to get user from localStorage:", error);
      return null;
    }
  },

  removeUser(): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (error) {
      console.error("Failed to remove user from localStorage:", error);
    }
  },
};
