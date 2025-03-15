export interface Serie {
    id: number;
    nome: string;
    streaming: string;
    imageUrl: string;
    episodioAtual: number;
    episodios: Episodio[]
}

export interface Episodio {
    id: number;
    descricao: string;
}