import { Jogo } from './Jogo';

export interface Aposta {
    id?: number;
    dataAposta: Date;
    concurso: string;
    dataConcurso: Date;
    jogos: Jogo[];
}
