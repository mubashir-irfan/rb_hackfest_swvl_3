import nc from "next-connect";
import { rejectWithError, respondWithData } from "../../../../../util";
import { updateUser, getUser, addRedFlag } from "../../CRUD";

const handler = nc();

handler.post(async (req, res) => {
  const { flagId, label } = req.body;
  const userId = req.query.id;
  if (!flagId) {
    return rejectWithError(res, "flagId field is required");
  }
  if (!label) {
    return rejectWithError(res, "label field is required");
  }

  try {
    const id = await addRedFlag({ userId, flagId, label });
    respondWithData(res, { id });
  } catch (er) {
    rejectWithError(res, er.message);
  }
});


export default handler;
