import { Account, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.steven.aora",
  projectId: "66da2ebd0027f2d30ceb",
  databaseId: "66da3143001ad68e1de8",
  userCollectionId: "66da317f002ed34ff97b",
  videoCollectionId: "66da31a40021401ca327",
  storageId: "66da34f5002c0affb38f",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID
const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response: any) {
      console.log(response);
    },
    function (error: any) {
      console.log(error);
    },
  );
};
