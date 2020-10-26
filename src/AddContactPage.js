import axios from "axios";
import {Formik, Form as FormikForm, ErrorMessage} from "formik";
import {Form, Button} from "react-bootstrap";
import {useHistory} from "react-router";
import * as yup from "yup";

const initData = {
    name: "",
    phone: "",
    email: "",
};

const validationSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required().email(),
});

function saveContact(contact) {
    return axios.post("/items", contact);
}

export function AddContactPage() {
    const history = useHistory();

    function onSubmit(values) {
        saveContact(values).then(() => {
            history.push("/");
        });
    }

    return (
        <>
            <h2>Add contact</h2>
            <AddContactForm onSubmit={onSubmit} />
        </>
    );
}

export function AddContactForm({onSubmit}) {
    return (
        <Formik
            initialValues={initData}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({getFieldProps, isSubmitting}) => (
                <FormikForm>
                    <Form.Group controlId="nameField">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" {...getFieldProps("name")} />
                        <ErrorMessage name="name" component={Error} />
                    </Form.Group>
                    <Form.Group controlId="phoneField">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" {...getFieldProps("phone")} />
                        <ErrorMessage name="phone" component={Error} />
                    </Form.Group>
                    <Form.Group controlId="emailField">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" {...getFieldProps("email")} />
                        <ErrorMessage name="email" component={Error} />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" disabled={isSubmitting}>
                            Save
                        </Button>
                    </Form.Group>
                </FormikForm>
            )}
        </Formik>
    );
}

function Error({children}) {
    return <Form.Text className="text-danger">{children}</Form.Text>;
}
