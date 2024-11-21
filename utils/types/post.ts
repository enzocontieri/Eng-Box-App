export interface Foto {
	url: string;  
  }
  export interface Post {
	id: number;
	idUsuario: string;
	titulo: string;
	conteudo: string;
	fotos: Foto[];  
  }
