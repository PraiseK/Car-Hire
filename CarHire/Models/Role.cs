using System.ComponentModel.DataAnnotations;
namespace CarHire.Models
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string RoleName { get; set; }
        public bool IsAdmin { get; set; }
    }
}
