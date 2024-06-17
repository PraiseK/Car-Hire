using CarHire.Controllers.Auth.Model;
using Microsoft.AspNetCore.Mvc;
using CarHire.Services;
using CarHire.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Identity.Data;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

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

        [HttpGet("login")]
        public bool Login(string username, string password)
        {
            return _userService.Login(username, password);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!_userService.Login(model.UserName, model.Password))
            {
                return Unauthorized();
            }

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, model.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            authClaims.Add(new Claim(ClaimTypes.Role, "admin"));
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }

        [HttpPost(Name = "AddNewUser")]
        public int AddNewUser(Users usermodel)
        {
            return _userService.AddNewUser(usermodel);
        }

        [HttpGet("GetUserDetails")]
        public Users GetUserDetails(int userId)
        {
            return _userService.GetUserDetails(userId);
        }

        [HttpGet("GetAllUserDetails")]
        public IEnumerable<Users> GetAllUserDetails()
        {
            return _userService.GetAllUserDetails();
        }
    }
}
