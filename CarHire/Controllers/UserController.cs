using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CarHire.Services;

namespace CarHire.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
        {
            _userService = new UserService();
            _configuration = configuration;
        }
    }
}
