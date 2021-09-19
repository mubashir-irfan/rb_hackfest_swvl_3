import nc from "next-connect";
import { rejectWithError, respondWithData } from "../../../../util";
import { addMember, createUser, getIncident, updateUser } from "../CRUD";
const handler = nc();

handler.post(async (req, res) => {
  const id = req.query.id;

  const { memberId, memberComment } = req.body;

  if (!memberId) {
    return rejectWithError(res, "memberId field is not set");
  }

  try {
    await addMember({ incidentId: id, memberId, comment: memberComment });

    respondWithData(res, {});
  } catch (er) {
    rejectWithError(res, er.message);
  }
});

export default handler;
