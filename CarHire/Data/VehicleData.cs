using CarHire.Models;

namespace CarHire.Data
{
    public class VehicleData
    {
        private DataConnection context;
        public VehicleData()
        {
            context = new DataConnection();
        }

        public int AddVehicle(Vehicle vehicleModel)
        {
            context.Vehicle.Add(vehicleModel);
            return context.SaveChanges();
        }

        public Vehicle? GetVehicle(int vehicleId)
        {
            return context.Vehicle.Find(vehicleId);

        }

        public IEnumerable<Vehicle> GetAllVehicleDetails()
        {
            return context.Vehicle.ToList();
        }
        
    }
}
