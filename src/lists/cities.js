

class City {
  constructor(name, xRatio, yRatio, color) {
    this.xRatioKey = 50;
    this.yRatioKey = 30;
    this.name = name;
    this.pos = {
      xRatio: xRatio,
      yRatio: yRatio,
    }
    this.color = color;
  }
}

export const cities = [
  new City("Algiers", 24.5, 13.25),
  new City("Atlanta", 9.1, 12.2),
  new City("Baghdad", 30.4, 12.8),
  new City("Bangkok", 39.75, 16.9),
  new City("Beijing", 41.2, 9.5),
  new City("Bogota", 11.1, 18.9),
  new City("Buenos Aries", 14.2, 26.2),
  new City("Cairo", 27.3, 14),
  new City("Chennai", 37.1, 18.7),
  new City("Chicago", 17.8, 9.4),
  new City("Delhi", 36.6, 12.9),
  new City("Essen", 24.7, 7),
  new City("Ho Chi Minh City", 41.95, 19.4),
  new City("Hong Kong", 41.8, 15.2),
  new City("Istanbul", 27.8, 10.9),
  new City("Jakarta", 39.7, 21.8),
  new City("Johannesburg", 27.8, 24.4),
  new City("Karachi", 33.9, 13.9),
  new City("Khartoum", 28, 17.5),
  new City("Kinshasa", 25.6, 20.9),
  new City("Kolkata", 39.15, 13.8),
  new City("Lagos", 23.3, 18.2),
  new City("Lima", 9.8, 22.9),
  new City("London", 21, 7.6),
  new City("Los Angeles", 3.8, 14.5),
  new City("Madrid", 20.5, 11.1),
  new City("Manila", 45.5, 19.2),
  new City("Mexico City", 7.15, 15.9),
  new City("Miami", 11.4, 15.1),
  new City("Milan", 26.2, 8.85),
  new City("Montreal", 11.4, 9.3),
  new City("Moscow", 30.8, 8.8),
  new City("Mumbai", 34.25, 16.7),
  new City("New York", 14.2, 9.8),
  new City("Osaka", 47.4, 13.7),
  new City("Paris", 23.8, 9.35),
  new City("Riyadh", 30.85, 16.05),
  new City("San Francisco", 3.05, 10.95),
  new City("Santiago", 10.25, 26.95),
  new City("Sao Paulo", 16.2, 23.35),
  new City("Seoul", 44.5, 9.4),
  new City("Shanghai", 41.5, 12.05),
  new City("St. Petersburg", 28.7, 6.1),
  new City("Sydney", 47.6, 26.8),
  new City("Taipei", 44.75, 14.65),
  new City("Tehran", 33.15, 10.4),
  new City("Tokyo", 47.05, 10.95),
  new City("Washington", 13, 12),
];

