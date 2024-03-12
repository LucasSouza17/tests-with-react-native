import { api } from "./api";
import { getCityByNameService } from "@services/getCityByNameService";
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });
    
    const response = await getCityByNameService("São Paulo");
    
    expect(response.length).toBeGreaterThan(0);
  });

  it("should fell into the catch, returns empty array", async () => {
    jest.spyOn(api, "get").mockRejectedValue("Error");
    const response = await getCityByNameService("São Paulo")

    expect(response.length).toBe(0)
  })
});
