export const validateForm = ({ name, email, password, passwordConfirm }) => {
    let tempErrors = {};

    tempErrors.name = name ? "" : "Name is required.";
    tempErrors.email = email ? "" : "Email is required.";
    if (email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        tempErrors.email = emailPattern.test(email)
            ? ""
            : "Email is not valid.";
    }
    if (!password) {
        tempErrors.password = "Password is required.";
    } else if (password.length < 8) {
        tempErrors.password = "Password must be at least 8 characters.";
    } else {
        tempErrors.password = "";
    }
    tempErrors.passwordConfirm =
        passwordConfirm === password
            ? ""
            : passwordConfirm === ""
            ? "Password is required."
            : "Passwords do not match.";

    return tempErrors;
};
