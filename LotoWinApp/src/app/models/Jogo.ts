import { Numero } from './Numero';

export interface Jogo {
    id?: number;
    premiado: boolean;
    numeros: Numero[];
    apostaId?: number;
}
