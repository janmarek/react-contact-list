import {render, fireEvent, waitFor, cleanup} from "@testing-library/react";
import {AddContactForm} from "./AddContactPage";

afterEach(cleanup);

test("Validation", async () => {
    const onSubmit = jest.fn();
    const {getByText, findByText} = render(
        <AddContactForm onSubmit={onSubmit} />
    );

    fireEvent.click(getByText(/save/i));

    await findByText("name is a required field");
    getByText("phone is a required field");
    getByText("email is a required field");
    expect(onSubmit).not.toHaveBeenCalled();
});

test("Validation ok", async () => {
    const onSubmit = jest.fn();

    const {getByText, getByLabelText} = render(
        <AddContactForm onSubmit={onSubmit} />
    );

    fireEvent.change(getByLabelText(/name/i), {
        target: {value: "name"},
    });
    fireEvent.change(getByLabelText(/phone/i), {
        target: {value: "123456"},
    });
    fireEvent.change(getByLabelText(/email/i), {
        target: {value: "test@test.cz"},
    });
    fireEvent.click(getByText(/save/i));

    // onSubmit se zavolá asynchronně, tak na něj musíme počkat
    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});
