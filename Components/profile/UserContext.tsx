import React, { createContext, ReactNode, useContext, useState } from 'react';
import { UserProfile } from '../../utils/types/UserProfile';

interface UserContextProps {
    userProfile: UserProfile;
    setUserProfile: (profile: UserProfile) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        bannerUrl: 'https://picsum.photos/200/',
        profilePhotoUrl: 'https://picsum.photos/200/300',
        name: 'John Doe',
        username: 'john.doe',
        email: 'john.doe@email.com',
        password: '12345',
        phoneNumber: '(85) 97584-6778'
    });

    return (
        <UserContext.Provider value={{ userProfile, setUserProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('userUser must be used within a UserProvider');
    }
    return context;
}