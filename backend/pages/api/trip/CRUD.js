import shortUUID from "short-uuid";
import { getDB } from "../../../firebase/client";

// Returns ID on resolve or error on reject
export async function createTrip({ users = [], incidents = [] }) {
  const db = getDB();

  const ID = shortUUID.generate();
  const ref = db.ref(`trip/${ID}`);

  try {
    await ref.set({
      users,
      incidents,
      created: Date.now(),
    });
    return ID;
  } catch (er) {
    throw er;
  }
}

export async function getTrip(id) {
  const db = getDB();

  const ref = db.ref(`trip/${id}`);

  try {
    let r = await ref.once("value");
    if (!r.exists()) throw new Error("Record doesn't exists");

    const v = r.val();
    return {
      id: v.id,
      users: v.users || [],
      incidents: v.incidents || [],
    };
  } catch (er) {
    throw er;
  }
}
