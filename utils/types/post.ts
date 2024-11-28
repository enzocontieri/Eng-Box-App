export interface Foto {
	uri: string;
	name: string,
	type: string
}
export interface Post {
	id: number;
	idUsuario: string;
	titulo: string;
	tema: string,
	subtemas: string,
	conteudo: string;
	fotos: Foto[];
}
