import * as yup from 'yup';
const getCharacterValidation = (str) => {
    return `Your password must have at least one ${str} character`;
};
export const LoginSchema = yup.object({
    Username: yup.string()
        .max(10, 'User name cannot be more than 10 characters')
    .min(5,"Minimum characters to be 5")
        .required('User name required'),
    Password: yup.string()
        .required('Password is required')
        .matches(/[0-9]/, getCharacterValidation('digit'))
        .matches(/[A-Z]/, getCharacterValidation('uppercase'))
        .matches(/[a-z]/, getCharacterValidation('lowercase'))
        .matches(/[.$%&)?(]/, getCharacterValidation('special'))
});


