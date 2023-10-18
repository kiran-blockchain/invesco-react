export const RegisterConfig = {
    Username: {
        label: "Username",
        placeholder: "Enter username",
        type: "text",
        name: "Username",
        id: "Username"
    },
    Password: {
        label: "Password",
        placeholder: "Enter password",
        type: "password",
        name: "Password",
        id: "Password"
    },
    ConfirmPassword: {
        label: "Confirm Password",
        placeholder: "Confirm password",
        type: "password",
        name: "ConfirmPassword",
        id: "ConfirmPassword"
    },
    Country: {
        label: "Country",
        placeholder: "Select Country",
        name: "Country",
        id: "Country"
    },
    Gender: {
        label: 'Gender',
        name: "Gender",
        options: [{ id: "male", value: "M", label: "Male" },
        { id: "female", value: "F", label: "Female" },
        { id: "NA", value: "NA", label: "Do not disclose" },
        ]
    }
}