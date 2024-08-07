export const CAR_TYPE = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
};
export const getUser = () => {
  return [{ username: "admin", password: "admin", role: "ADMIN" }];
};
export const getAvailableVerhicles = () => {
  const verhicles = [
    {
      id: 0,
      name: "Toyota Corolla",
      make: "Toyota",
      model: "Corolla",
      year: "2018",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 2,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 75.15,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/57707_GWY_R.png?app=1.0.0",
    },
    {
      id: 1,
      name: "Nissan Juke",
      make: "Nissan",
      model: "Juke",
      year: "2018",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 75.15,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/48057_GWY_R.png?app=1.0.0",
    },
    {
      id: 2,
      name: "FORD RANGER WILDTRAK",
      make: "FORD",
      model: "RANGER WILDTRAK",
      year: "2021",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 85.75,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/46255_GWY_R.png?app=1.0.0",
    },
    {
      id: 3,
      name: "Honda Civic",
      make: "Honda",
      model: "Civic",
      year: "2020",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 2,
      carType: CAR_TYPE.MANUAL,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 70.0,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/40650_GWY_R.png?app=1.0.0",
    },
    {
      id: 4,
      name: "Mazda CX-5",
      make: "Mazda",
      model: "CX-5",
      year: "2019",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Gold Coast",
      price: 80.5,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/49517_GWY_R.png?app=1.0.0",
    },
    {
      id: 5,
      name: "Hyundai Tucson",
      make: "Hyundai",
      model: "Tucson",
      year: "2021",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: true,
      location: "Gold Coast",
      price: 82.0,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/49050_GWY_R.png?app=1.0.0",
    },
    {
      id: 6,
      name: "Kia Sportage",
      make: "Kia",
      model: "Sportage",
      year: "2018",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 75.0,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/42757_GWY_R.png?app=1.0.0",
    },
    {
      id: 7,
      name: "Subaru Outback",
      make: "Subaru",
      model: "Outback",
      year: "2019",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Gold Coast",
      price: 78.5,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/45250_GWY_R.png?app=1.0.0",
    },
    {
      id: 8,
      name: "Volkswagen Golf",
      make: "Volkswagen",
      model: "Golf",
      year: "2020",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 2,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 72.5,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/43550_GWY_R.png?app=1.0.0",
    },
    {
      id: 9,
      name: "BMW X3",
      make: "BMW",
      model: "X3",
      year: "2021",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 4,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 90.0,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/49055_GWY_R.png?app=1.0.0",
    },
    {
      id: 10,
      name: "Mercedes-Benz C-Class",
      make: "Mercedes-Benz",
      model: "C-Class",
      year: "2020",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 25,
      isHybird: false,
      location: "Gold Coast",
      price: 95.0,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/46650_GWY_R.png?app=1.0.0",
    },
    {
      id: 11,
      name: "Audi A4",
      make: "Audi",
      model: "A4",
      year: "2019",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CAR_TYPE.AUTOMATIC,
      drivingAge: 25,
      isHybird: false,
      location: "Brisbane",
      price: 92.5,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/48555_GWY_R.png?app=1.0.0",
    },
    {
      id: 12,
      name: "Ford Mustang",
      make: "Ford",
      model: "Mustang",
      year: "2021",
      seats: 4,
      doors: 2,
      ac: true,
      suitCases: 1,
      carType: CAR_TYPE.MANUAL,
      drivingAge: 25,
      isHybird: false,
      location: "Gold Coast",
      price: 105.0,
      available: true,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/49057_GWY_R.png?app=1.0.0",
    },
  ];
  return verhicles;
};
