/* eslint-disable */
import { cleanup, render } from "@testing-library/react";
import Main from ".";

afterEach(cleanup);

it("checkMainRenders", () => {
  const { queryByTestId } = render(<Main />);
  expect(queryByTestId("main-body")).toBeTruthy();
});

//Need a bit more time to add some more meaningful tests
