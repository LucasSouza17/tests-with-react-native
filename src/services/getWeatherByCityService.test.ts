import { api } from "./api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse";
import { getWeatherByCityService } from "@services/getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
  it("should be return weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 });

    expect(response).toHaveProperty("today");
  });
});
