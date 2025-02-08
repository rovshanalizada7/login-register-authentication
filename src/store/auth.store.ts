import { create } from 'zustand';
import { destroyToken, getToken } from '../components/Auth/utils/save-token';
import { Profile } from '../service/api';

type Store = {
  token?: string | null;
  profile?: Profile | null;
  setToken: (token?: string | null) => void;
  setProfile: (profile: Profile | null) => void;
  logout: () => void;
};

const token = getToken();

export const useAuth = create<Store>()((set) => ({
  token: token ?? '',
  profile: null,
  setToken: (token?: string | null) => set({ token }),
  setProfile: (profile: Profile | null) => set({ profile }),
  logout: () => {
    destroyToken();
    set({ token: null, profile: null });
  },
}));
