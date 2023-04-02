import { render, screen, fireEvent } from "../../../utils/test";

import Type from "../Type";

test("update product's total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 아메리카 여행 상품 한개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  // userEvent.clear(americaInput);
  // userEvent.type(americaInput, "1");
  // https://github.com/testing-library/user-event/issues/411
  fireEvent.change(americaInput, { target: { value: "1" } });

  expect(productsTotal).toHaveTextContent("1000");
});
