using CarHire.Models;
using CarHire.Data;

namespace CarHire.Services
{
    public class UserService
    {
        private UserData _user;
        public UserService() {
            _user = new UserData();
        }

        public int AddNewUser(Users userModel)
        {
            try
            {
                if (userModel == null)
                {
                    throw new Exception("User Details cannot be null!");
                }
                if (userModel.Email == null)
                {
                    throw new Exception("Email cannot be null!");
                }
                return _user.AddUser(userModel);

               

               
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public Users GetUserDetails(int userId)
        {
            try
            {
                if (userId == 0)
                {
                    throw new Exception("User ID must be greater than 0");
                }

                var user = _user.GetUser(userId);
                if (user == null)
                    throw new Exception("User not existed");
                return user;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public IEnumerable<Users>? GetAllUserDetails()
        {
            try
            {
                var users = _user.GetAllUserDetails();
                return users;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public bool Login(string username, string password)
        {
            try
            {
                if (username == string.Empty)
                {
                    throw new Exception("User Name must be greater than 0");
                }
                if (password == string.Empty)
                {
                    throw new Exception("Password must be greater than 0");
                }

                return _user.Login(username, password);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
