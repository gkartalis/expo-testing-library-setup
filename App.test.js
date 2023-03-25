import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Text, Platform } from "react-native";

import App from "./App";

const Yolo = () => {
  if (Platform.OS === "android") {
    return <Text>aslkdngasfg</Text>;
  }

  return <Text>iOS</Text>;
};

describe("<App />", () => {
  it("has 1 child", () => {
    render(<Yolo />);

    expect(screen.queryByText("iOS")).toBeTruthy();
  });
});
