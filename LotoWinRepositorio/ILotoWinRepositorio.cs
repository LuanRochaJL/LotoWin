using System.Threading.Tasks;
using LotoWinDominio;

namespace LotoWinRepositorio
{
    public interface ILotoWinRepositorio
    {
         void Add<T> (T entidade) where T:class;
         void Update<T> (T entidade) where T:class;
         void Delete<T> (T entidade) where T:class;
         Task<bool> SaveChangesAsync();
         Task<Aposta[]> GetAllAsyncApostas();
         Task<Aposta[]> GetAllAsyncApostasPorConcurso(string concurso);
         Task<Aposta> GetAsyncAposta(int id);
    }
}