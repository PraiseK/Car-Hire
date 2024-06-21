using CarHire.Data;
using CarHire.Models;

namespace CarHire.Services
{
    public class VehicleService
    {
        private VehicleData _vehicle;
        public VehicleService()
        {
            _vehicle = new VehicleData();
        }

        public int AddNewVehicle(Vehicle vehicleModel)
        {
            try
            {
                if (vehicleModel == null)
                {
                    throw new Exception("Vehicle Details cannot be null!");
                }
                if (vehicleModel.CarType == null)
                {
                    throw new Exception("CarType cannot be null!");
                }
                return _vehicle.AddVehicle(vehicleModel);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

       

        public Vehicle GetVehicleDetails(int vehicleId)
        {
            try
            {
                if (vehicleId == 0)
                {
                    throw new Exception("Vehicle ID must be greater than 0");
                }

                var vehicle = _vehicle.GetVehicle(vehicleId);
                if (vehicle == null)
                    throw new Exception("Vehicle not existed");
                return vehicle;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public IEnumerable<Vehicle>? GetAllVehicleDetails()
        {
            try
            {
                var vehicles = _vehicle.GetAllVehicleDetails();
                return vehicles;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
