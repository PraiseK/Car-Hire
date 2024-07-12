using System.ComponentModel.DataAnnotations;


namespace CarHire.Models
{
    public class Vehicle
    {
        [Key]
        public int Id { get; set; }
        public string VehicleName { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int Seat { get; set; }
        public int Doors { get; set; }
        public bool AC {  get; set; }
        public int SuitCases { get; set; }
        public int DrivingAge {  get; set; }
        public string Location { get; set; }
        public float price { get; set; }
        public bool isHybrid { get; set; }

        public IEnumerable <CarType>? CarType { get; set; }
    }
}
