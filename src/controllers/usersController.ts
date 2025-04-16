import { addDocumentToCollection } from "@/lib/firebase-functions";
import { COLLECTIONS } from "@/lib/collections";

export const createUser = async ({ email, name } : { email: string, name: string}) => {
    try {
        await addDocumentToCollection(COLLECTIONS.USERS, { email: email, name: name });
    } catch (error) {
        console.log("Error createUser", error);
    }
};