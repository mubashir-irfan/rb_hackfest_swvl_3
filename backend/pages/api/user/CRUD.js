import shortUUID from "short-uuid";
import { getDB } from "../../../firebase/client";

// Returns ID on resolve or error on reject
export async function createUser({ name, phone }) {
  const db = getDB();

  const ID = shortUUID.generate();
  const ref = db.ref(`user/${ID}`);

  try {
    await ref.set({
      name,
      phone,
      redflags: [],
      created: Date.now(),
      modified: Date.now(),
    });
    return ID;
  } catch (er) {
    throw er;
  }
}

export async function getUser(id) {
  const db = getDB();

  const ref = db.ref(`user/${id}`);

  try {
    const r = await ref.once("value");

    if (!r.exists()) throw new Error("Record doesn't exists");

    let v = r.val();
    return {
      id: id,
      name: v.name,
      phone: v.phone,
      redFlags: v.redflags || [],
    };
  } catch (er) {
    throw er;
  }
}

export async function updateUser({ id, ...fields }) {
  const db = getDB();

  const ref = db.ref(`user/${id}`);

  try {
    await ref.update({
      ...fields,
      modified: Date.now(),
    });
    return id;
  } catch (er) {
    throw er;
  }
}

export async function addRedFlag({ userId, flagId, label }) {
  const db = getDB();
  const ref = db.ref(`user/${userId}/redflags`);

  const nRef = ref.push();

  try {
    await nRef.set({
      id: flagId,
      label,
      created: Date.now(),
    });
    return nRef.key;
  } catch (er) {
    throw er;
  }
}
// Returns removed ID on success
export async function deleteRedFlag({ userId, flagId }) {
  const db = getDB();
  const ref = db.ref(`user/${userId}/redflags/${flagId}`);

  try {
    await ref.remove();
    return flagId;
  } catch (er) {
    throw er;
  }
}
