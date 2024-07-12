using System.ComponentModel.DataAnnotations;
namespace CarHire.Models
{
    public class Role
    {
        [Key]
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public bool IsAdmin { get; set; }
        public ICollection<Users> Users { get; set; }
    }
}
