import React from 'react'
import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField'
import { setIn } from 'final-form';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
});

const MyForm = () => {

    const onSubmit = () => {

    }

    const validateFormValues = (schema) => async (values) => {
        if (typeof schema === 'function') {
            schema = schema();
        }
        try {
            await schema.validate(values, { abortEarly: false });
        } catch (err) {
            const errors = err.inner.reduce((formError, innerError) => {
                return setIn(formError, innerError.path, innerError.message);
            }, {});

            return errors;
        }
    };

    const validate = validateFormValues(validationSchema);

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name" >
                        {props => (
                            <TextField
                                variant="outlined"
                                name={props.input.name}
                                placeholder="Name"
                                value={props.input.value}
                                onChange={props.input.onChange}
                                onBlur={(event) => props.input.onBlur(event)}
                                error={(props.meta.error && props.meta.touched)}
                            />
                        )}
                    </Field>
                    <Field name="email" >
                        {props => (
                            <TextField
                                variant="outlined"
                                name={props.input.name}
                                placeholder="Email"
                                value={props.input.value}
                                onChange={props.input.onChange}
                                onBlur={(event) => props.input.onBlur(event)}
                                error={(props.meta.error && props.meta.touched)}
                                helperText={props.meta.error && props.meta.touched ? "Incorrect email address." : ""}
                            />
                        )}
                    </Field>
                    <button type="submit">Submit</button>
                </form>
            )}
        />
    )
}


export default MyForm
