using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using LotoWinRepositorio;
using LotoWinDominio;

namespace LotoWinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApostaController : ControllerBase
    {
        public readonly ILotoWinRepositorio _repo;
        public ApostaController(ILotoWinRepositorio repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _repo.GetAllAsyncApostas());
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Não foi possível conectar o banco de dados!");
            }
        }

        [HttpGet("getByConcurso/{Concurso}")]
        public async Task<IActionResult> Get(string concurso)
        {
            try
            {
                return Ok(await _repo.GetAllAsyncApostasPorConcurso(concurso));
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Não foi possível conectar o banco de dados!");
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                return Ok(await _repo.GetAsyncAposta(id));
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Não foi possível conectar o banco de dados!");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Aposta model)
        {
            try
            {
                _repo.Add(model);
                if(await _repo.SaveChangesAsync())
                {
                    return Created($"/api/aposta/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Não foi possível conectar o banco de dados!");
            }

            return BadRequest();
        }

        [HttpPut]
        public async Task<IActionResult> Put(Aposta model)
        {
            try
            {
                var aposta = await _repo.GetAsyncAposta(model.Id);
                if(aposta == null)
                {
                    return NotFound();
                }

                _repo.Update(model);
                if(await _repo.SaveChangesAsync())
                {
                    return Created($"/api/aposta/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Não foi possível conectar o banco de dados!");
            }

            return BadRequest();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var aposta = await _repo.GetAsyncAposta(id);
                if(aposta == null)
                {
                    return NotFound();
                }

                _repo.Delete(aposta);
                if(await _repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Não foi possível conectar o banco de dados!");
            }

            return BadRequest();
        }
    }
}
