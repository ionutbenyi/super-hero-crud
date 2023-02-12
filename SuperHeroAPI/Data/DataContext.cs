using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        // so that the entity will be recognized in DB as a table
        public DbSet<SuperHero> SuperHeroes { get; set; }
    }
}
