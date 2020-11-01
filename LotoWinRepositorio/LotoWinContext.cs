using Microsoft.EntityFrameworkCore;
using LotoWinDominio;

namespace LotoWinRepositorio
{
    public class LotoWinContext : DbContext
    {
        public LotoWinContext(DbContextOptions<LotoWinContext> options) : base (options){ }
        public DbSet<Aposta> Apostas { get; set; }
        public DbSet<Jogo> Jogos { get; set; }
        public DbSet<Numero> Numeros { get; set; }
    }
}