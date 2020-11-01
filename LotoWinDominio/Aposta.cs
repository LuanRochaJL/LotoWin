using System;
using System.Collections.Generic;

namespace LotoWinDominio
{
    public class Aposta
    {        
        public int Id { get; set; }
        public DateTime DataAposta { get; set; }
        public string Concurso { get; set; }
        public DateTime DataConcurso { get; set; }
        public List<Jogo> Jogos { get; set; }
    }
}