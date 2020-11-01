namespace LotoWinDominio
{
    public class Numero
    {
        public int Id { get; set; }
        public int Valor { get; set; }
        public int JogoId { get; set; }
        public Jogo Jogo { get; }
    }
}