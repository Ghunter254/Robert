// src/appwrite.ts
import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1") // your Appwrite API endpoint
  .setProject("68da2cc50027438313ca"); // your Project ID

// Export services you’ll use in components
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export default client;
