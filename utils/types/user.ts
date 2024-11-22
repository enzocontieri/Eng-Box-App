import { UserResponse } from './user-response';

export type User = Pick<
	UserResponse,
	'email' | 'fotoUsu' | 'isMonitor' | 'nivelConsciencia' | 'nome' | 'telefone'
>;
