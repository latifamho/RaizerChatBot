import { ID } from "appwrite";
import { databases } from "./appwrite";

import axios from "axios";
import { data } from "autoprefixer";

export async function createEvent(collectionID, event) {
    // database id,
    const document = await databases.createDocument(
        "665e3d8c002f6c6b1110",
        collectionID,
        ID.unique(),
        event
    );
    return document;
}

export async function getDocuments(collectionID) {
    // first database id , second collection id
    const { documents } = await databases.listDocuments(
        "665e3d8c002f6c6b1110",
        collectionID
    );
    return documents;
}

export async function translateText(text) {
    // Creating URLSearchParams with translation parameters
    const encodedParams = new URLSearchParams();
    encodedParams.set("from", "auto");
    encodedParams.set("to", "en");
    encodedParams.set("text", text);

    // Setting up the request options
    const options = {
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key":
                "01caaa137cmsh2651af1cad49c17p18da88jsnb9731f6a9e9c",
            "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
        },
        data: encodedParams,
    };

    try {
        // Making the translation request
        const response = await axios.request(options);
        // Returning the translated text
        return response.data.trans;
    } catch (error) {
        return null;
    }
}

export function setArrayInLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

export function getArrayFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

export const getDate = (userID) => {
    const storedData = localStorage.getItem("dataArray");
    const data = JSON.parse(storedData);
    if (data) {
        const user = data.find((user) => user.id === userID);
        return user;
    }
    return "Error Getting User Data";
};

export const getDataById = (id) => {
    const storedData = localStorage.getItem("dataArray");
    const data = JSON.parse(storedData);

    if (data) {
        const user = data.find((user) => user.id === id);
        return user || null;
    }
    return null;
};

export const addToChatByUserId = (id, chatObject) => {
    const updatedData = data?.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                CHAT: [...item.CHAT, chatObject],
            };
        }
        return item;
    });

    return updatedData;
};
