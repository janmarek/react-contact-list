import React from "react";

import {Contact} from "./Contact";

export default {
    title: "Example/Contact",
    component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const FilledContact = Template.bind({});
FilledContact.args = {
    name: "Honza",
    phone: "12334",
    email: "honza@cosi.com",
};
