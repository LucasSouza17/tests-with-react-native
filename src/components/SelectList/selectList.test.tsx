import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "São José do Rio Preto", latitude: 987, longitude: 654 },
    ];
    
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campinas/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[0])
  });

  it("not should be show options when data props is empty", () => {
    render(
    <SelectList data={[]} onChange={() => {}} onPress={() => {}} />
    )

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0)
  })
});
