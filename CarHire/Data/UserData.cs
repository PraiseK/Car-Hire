using CarHire.Models;
using CarHire.Data;
using Microsoft.EntityFrameworkCore;

namespace CarHire.Data
{
    public class UserData
    {
        private DataConnection context;
        public UserData() {
            context = new DataConnection();
        }

        public int AddUser(Users userModel)
        {
            context.Users.Add(userModel);
            return context.SaveChanges();
        }

        public Users? GetUser(int userId)
        {
            return context.Users.Find(userId);

        }

        public IEnumerable<Users> GetAllUserDetails()
        {
            return context.Users.ToList();
        }
        public bool Login(string username, string password)
        {
            var user = context.Users.Where(x => x.UserName == username && x.Password == password).FirstOrDefault();
            if (user != null)
                return true;
            return false;
        }
    }
}
