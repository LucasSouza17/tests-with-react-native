import { getStorageCity, saveStorageCity, removeStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "sjrp_01",
  latitude: 123,
  longitude: 456,
  name: "SJRP",
};

describe("Storage: cityStorage", () => {
  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be return city storaged.", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storage.", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  })
});
