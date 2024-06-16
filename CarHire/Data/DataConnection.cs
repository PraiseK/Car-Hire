using Microsoft.EntityFrameworkCore;
using CarHire.Models;

namespace CarHire.Data
{
    public class DataConnection : DbContext
    {
        private readonly string _connectionString;

        // These variable to create new tables into DB
        public DbSet<Users> Users { get; set; } = null;
        public DbSet<Role> Role { get; set; } = null;

        // this is initialise DB connection
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=W10TUF\SQLEXPRESS01;Initial Catalog=CarHire;User ID=sa; Password=phuclan0304; Trust Server Certificate=True");
        }
    }
}
