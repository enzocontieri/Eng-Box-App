import { JwtPayload } from 'jwt-decode';

export type TokenResponse = {
	message: string;
	token: string;
};

export type TokenData = JwtPayload & {
	email: string;
};
