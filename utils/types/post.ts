export interface Foto {
	uri: string;
	name: string,
	type: string
}
export interface Post {
	id: number;
	idUsuario: string;
	dataCriacao: string,
	titulo: string;
	tema: string,
	subtemas: string,
	conteudo: string;
	fotos: Foto[];
}

export interface Especialist {
	titulo: string;
	conteudo: string;
}