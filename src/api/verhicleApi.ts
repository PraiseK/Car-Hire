import { c } from "vite/dist/node/types.d-aGj9QkWt";

interface Verhicle {
  name: String;
  make: String;
  model: String;
  year: String;
  seats: Number;
  doors: Number;
  ac: Boolean;
  suitCases: Number;
  carType: CarType;
  drivingAge: Number;
  isHybird: Boolean;
  location: String;
  price: Number;
  imgDir: String;
}
enum CarType {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL",
}

export const getAvailableVerhicles = () => {
  const verhicles: Verhicle[] = [
    {
      name: "Toyota Corolla",
      make: "Toyota",
      model: "Corolla",
      year: "2018",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 2,
      carType: CarType.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 75.15,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/57707_GWY_R.png?app=1.0.0",
    },
    {
      name: "Nissan Juke",
      make: "Nissan",
      model: "Juke",
      year: "2018",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CarType.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 75.15,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/57707_GWY_R.png?app=1.0.0",
    },
    {
      name: "FORD RANGER WILDTRAK",
      make: "FORD",
      model: "RANGER WILDTRAK",
      year: "2021",
      seats: 5,
      doors: 4,
      ac: true,
      suitCases: 3,
      carType: CarType.AUTOMATIC,
      drivingAge: 21,
      isHybird: false,
      location: "Brisbane",
      price: 85.75,
      imgDir:
        "https://static.europcar.com/carvisuals/450x300/46255_GWY_R.png?app=1.0.0",
    },
  ];

  return verhicles;
};
