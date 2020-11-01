using System.Collections.Generic;

namespace LotoWinDominio
{
    public class Jogo
    {
        public int Id { get; set; }
        public bool Premiado { get; set; }
        public List<Numero> Numeros { get; set; }
        public int ApostaId { get; set; }
        public Aposta Aposta { get; }
    }
}