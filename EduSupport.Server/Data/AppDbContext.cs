using Microsoft.EntityFrameworkCore;
using EduSupport.Server.Models;

namespace EduSupport.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opts) : base(opts) { }
        public DbSet<User> Users { get; set; }
    }
}