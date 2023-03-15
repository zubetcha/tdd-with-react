import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  // screen object를 이ㅇㅐ서 원는 엘ㅣㅓㄴ트에 접ㅡ
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("plus-button");
  expect(minusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  fireEvent.click(plusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(minusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
});
