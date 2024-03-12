import { render, screen } from "@testing-library/react-native";

import { NextDays } from "@components/NextDays";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30°c",
            max: "35°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "28°c",
            max: "32°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "31°c",
            max: "38°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
