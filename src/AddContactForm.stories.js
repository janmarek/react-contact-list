import React from "react";

import {AddContactForm} from "./AddContactPage";

export default {
    title: "Example/AddContactForm",
    component: AddContactForm,
};

export const Form = () => <AddContactForm onSubmit={() => {}} />;

