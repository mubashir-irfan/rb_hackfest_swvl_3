import shortUUID from "short-uuid";
import { getDB } from "../../../firebase/client";


export const INCIDENT_TYPE_SAFETY = 0;
export const INCIDENT_TYPE_CONVENIENCE = 1;

export const INCIDENT_SEVERITY_TRIVIAL = 0;
export const INCIDENT_SEVERITY_MILD = 1;
export const INCIDENT_SEVERITY_SEVERE = 2;

export async function createIncident({
  reporterId,
  title,
  type,
  description,
  subjectId,
  tripId,
  memberIds = [],
  severity = INCIDENT_SEVERITY_SAFE,
  memberComments = [],
}) {
  const db = getDB();

  const ID = shortUUID.generate();
  const ref = db.ref(`incident/${ID}`);

  try {
    await ref.set({
      reporterId,
      title,
      type,
      description,
      subjectId,
      tripId,
      memberIds,
      severity,
      memberComments,
      created: Date.now(),
    });
    return ID;
  } catch (er) {
    throw er;
  }
}

export async function getIncident(id) {
  const db = getDB();

  const ref = db.ref(`incident/${id}`);

  try {
    let r = await ref.once("value");
    if (!r.exists()) throw new Error("Record doesn't exists");

    const v = r.val();

    return {
      id: id,
      reporterId: v.reporterId,
      title: v.title,
      type: v.type,
      decription: v.description,
      subjectId: v.subjectId,
      tripId: v.tripId,
      memberIds: Object.entries(v.memberIds).map((v, i) => v[1]) || [],
      severity: v.severity,
      memberComments:
        Object.entries(v.memberComments).map((v, i) => ({
          id: v[0],
          ...v[1],
        })) || [],
      created: v.created,
    };
  } catch (er) {
    throw er;
  }
}

export async function addMember({ incidentId, memberId, comment }) {
  const db = getDB();
  const ref = db.ref(`incident/${incidentId}/memberIds`);
  const refComments = db.ref(`incident/${incidentId}/memberComments`);

  const nRef = ref.push();
  const cRef = refComments.push();

  try {
    await nRef.set(memberId);
  } catch (er) {
    throw er;
  }
  if (comment) {
    try {
      await cRef.set({
        userId: memberId,
        comment: comment,
        verfication: false,
      });
    } catch (er) {
      throw er;
    }
  }
}
