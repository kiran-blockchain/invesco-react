import * as yup from 'yup';

const getCharacterValidation = (str) => {
    return `Your password must have at least one ${str} character`;
};
export const RegisterSchema = yup.object().shape({
    FirstName: yup.string()
        .max(10,
            'First name cannot be more than 10 characters')
        .required('First name is required'),
    LastName: yup.string()
        .max(10,
            'Last name cannot be more than 10 characters')
        .required('Last name is required'),

    Username: yup.string()
        .max(10,
            'User name cannot be more than 10 characters')
        .min(5, "Minimum characters to be 5")
        .required('User name required'),
    Password: yup.string()
        .required('Password is required')
        .matches(/[0-9]/, getCharacterValidation('digit'))
        .matches(/[A-Z]/, getCharacterValidation('uppercase'))
        .matches(/[a-z]/, getCharacterValidation('lowercase'))
        .matches(/[.$%&)?(]/, getCharacterValidation('special')),
    ConfirmPassword: yup.string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('Password'), null],
         'Confirm password does not match')

});