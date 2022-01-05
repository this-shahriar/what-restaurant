import { cleanup, render } from "@testing-library/react";
import Main from ".";

afterEach(cleanup);

it("checkAddNewRenders", () => {
  const view = render(<Main />);
  expect(view).toBeTruthy();
});

//Need a bit more time to add some more meaningful tests
