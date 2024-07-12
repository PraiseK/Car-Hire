﻿using System.ComponentModel.DataAnnotations;

namespace CarHire.Models
{
    public class CarType
    {
        public int CarTypeId { get; set; }
        public string CarTypes { get; set; }
        public ICollection<Vehicle> Vehicles { get; set; }
    }
}
