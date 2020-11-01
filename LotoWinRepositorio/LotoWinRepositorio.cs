using System.Linq;
using System.Threading.Tasks;
using LotoWinDominio;
using Microsoft.EntityFrameworkCore;

namespace LotoWinRepositorio
{
    public class LotoWinRepo : ILotoWinRepositorio
    {
        private readonly LotoWinContext _context;
        public LotoWinRepo(LotoWinContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public void Add<T>(T entidade) where T : class
        {
            _context.Add(entidade);
        }

        public void Update<T>(T entidade) where T : class
        {
            _context.Update(entidade);
        }

        public void Delete<T>(T entidade) where T : class
        {
            _context.Remove(entidade);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Aposta[]> GetAllAsyncApostas()
        {
            IQueryable<Aposta> qry = _context.Apostas
                .Include(a => a.Jogos)
                .ThenInclude(b => b.Numeros)
                .OrderByDescending(c => c.Concurso);

            return await qry.ToArrayAsync();
        }

        public async Task<Aposta[]> GetAllAsyncApostasPorConcurso(string concurso)
        {
            IQueryable<Aposta> qry = _context.Apostas
                .Where(a => a.Concurso.Equals(concurso))
                .Include(b => b.Jogos)
                .ThenInclude(c => c.Numeros)
                .OrderByDescending(d => d.Concurso);

            return await qry.ToArrayAsync();
        }

        public async Task<Aposta> GetAsyncAposta(int id)
        {
            IQueryable<Aposta> qry = _context.Apostas
                .Where(a => a.Id.Equals(id))
                .Include(b => b.Jogos)
                .ThenInclude(c => c.Numeros);

            return await qry.FirstOrDefaultAsync();
        }
    }
}