using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHeroAPI.Data;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public SuperHeroController(DataContext context)
        {
            this._dataContext = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            return Ok(await _dataContext.SuperHeroes.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> AddSuperHero(SuperHero superHero)
        {
            _dataContext.SuperHeroes.Add(superHero);
            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.SuperHeroes.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateSuperHero(SuperHero superHero)
        {
            SuperHero dbHero = await _dataContext.SuperHeroes.FindAsync(superHero.Id);
            if (dbHero == null)
            {
                return BadRequest("Hero not found");
            }

            dbHero.Name = superHero.Name;
            dbHero.FirstName = superHero.FirstName;
            dbHero.LastName = superHero.LastName;
            dbHero.Place = superHero.Place;

            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.SuperHeroes.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> DeleteSuperHero(int id)
        {
            SuperHero dbHero = await _dataContext.SuperHeroes.FindAsync(id);
            if (dbHero == null)
            {
                return BadRequest("Hero not found");
            }

            _dataContext.SuperHeroes.Remove(dbHero);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.SuperHeroes.ToListAsync());
        }
    }
}
