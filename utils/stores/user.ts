import { create } from 'zustand';
import { UserResponse } from '../types/user-response';

interface UserState {
	user: UserResponse | null;
	setUser: (newUser: UserResponse | null) => void;
	clearUser: () => void;
}

export const userStore = create<UserState>((set) => ({
	user: null,
	setUser: (newUser: UserResponse | null) => set({ user: newUser }),
	clearUser: () => set({ user: null }),
}));
