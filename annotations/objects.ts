const profile = {
  name: 'Christian',
  age: 33,
  coords: {
    lat: 41,
    lng: -74,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
