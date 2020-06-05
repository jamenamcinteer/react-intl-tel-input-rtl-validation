import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("validates phone number", async () => {
  const { getByText, getByLabelText } = render(<App />);

  // fireEvent.change(getByLabelText("Phone Number"), {
  //   target: { value: "(234) 567-0000" },
  // });
  fireEvent.click(getByLabelText("Phone Number"));
  fireEvent.blur(getByLabelText("Phone Number"));
  await wait(() => getByText(/Phone number is valid/));
});
