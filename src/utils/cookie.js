import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setIdCookie = (userId) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1000 * 60 * 30);
    cookies.set("userId", userId, { path: "/", expires: expirationDate });
    console.log(userId);
};
export const setEmailCookie = (email) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1000 * 60 * 30);
    cookies.set("email", email, { path: "/", expires: expirationDate });
    console.log(email);
};
export const setPasswordCookie = (pass) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1000 * 60 * 30);
    cookies.set("password", pass, { path: "/", expires: expirationDate });
    console.log(pass);
};

export const getIdCookie = () => {
    console.log(cookies.get("userId"));
    return cookies.get("userId");
};
export const getEmailCookie = () => {
    console.log(cookies.get("email"));
    return cookies.get("email");
};
export const getPasswordCookie = () => {
    console.log(cookies.get("password"));
    return cookies.get("password");
};

export const deleteIdCookie = () => {
    console.log("delete");
    cookies.remove("userId", { path: "/" });
};
export const deleteEmailCookie = () => {
    console.log("delete");
    cookies.remove("email", { path: "/" });
};
export const deletePasswordCookie = () => {
    console.log("delete");
    cookies.remove("password", { path: "/" });
};
