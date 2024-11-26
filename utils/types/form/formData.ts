import { Foto } from "../post";

export interface RegisterFormData {
	email: string;
	password: string;
	username: string;
	confirmPassword: string;
}

export interface LoginFormData {
	email: string;
	password: string;
}


export interface ForgotFormData {
	email: string;

}

export interface UploadFormData {
	tema: string
	titulo: string;
	conteudo: string;
	fotos: Foto[]
}