import { render, screen } from "@testing-library/react";
import { Todo } from ".";
import userEvent from "@testing-library/user-event";

describe("render Todo", () => {
  const onClickDelete = vi.fn();
  const onClickComplete = vi.fn();

  test("check renders 'done'", () => {
    const todo = {
      text: "Component testing is done with react-testing-library",
      done: true,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
    );

    const element = screen.getByText("This todo is done");
    expect(element).toBeDefined();
  });

  test("check renders 'done'", () => {
    const todo = {
      text: "Component testing is done with react-testing-library",
      done: true,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
    );

    const del = screen.getByText("Delete");
    const user = userEvent.setup();
    user.click(del);
    expect(onClickDelete.mock.calls[0].length).toBe(1);
  });

  test("check renders 'not done'", () => {
    const todo = {
      text: "Component testing is done with react-testing-library",
      done: false,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
    );

    const done = screen.getByText("Set as done");
    const user = userEvent.setup();
    user.click(done);
    expect(onClickDelete.mock.calls[0].length).toBe(1);
  });
});
