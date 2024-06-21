using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarHire.Data;
using CarHire.Models;
using CarHire.Services;

namespace CarHire.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        
        private readonly VehicleService _vehicleService;
        private readonly IConfiguration _configuration;

        public VehiclesController(IConfiguration configuration)
        {
            _vehicleService = new VehicleService();
            _configuration = configuration;
        }

        // GET: api/GetVehicleDetails
        [HttpGet("GetVehicleDetails")]
        public Vehicle GetVehicleDetails(int vehicleId)
        {
            return _vehicleService.GetVehicleDetails(vehicleId);
        }

        // GET: api/GetAllVehicleDetails
        [HttpGet("GetAllVehicleDetails")]
        public IEnumerable<Vehicle> GetAllVehicleDetails()
        {
            return _vehicleService.GetAllVehicleDetails();
        }

        
        // POST: api/Vehicles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost(Name = "AddNewVehicle")]
        public int AddNewVehicle(Vehicle vehiclemodel)
        {
            return _vehicleService.AddNewVehicle(vehiclemodel);
        }

        
    }
}
