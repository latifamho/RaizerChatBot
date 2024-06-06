import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65a7abaf8a1cc1324f2c");

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
