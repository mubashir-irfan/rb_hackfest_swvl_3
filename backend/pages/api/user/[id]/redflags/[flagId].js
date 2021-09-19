import nc from "next-connect";
import { rejectWithError, respondWithData } from "../../../../../util";
import { updateUser, getUser, addRedFlag, deleteRedFlag } from "../../CRUD";

const handler = nc();

handler.delete(async (req, res) => {
  const { id, flagId } = req.query;

  try {
    respondWithData(res, { id: await deleteRedFlag({ userId: id, flagId }) });
  } catch (er) {
    rejectWithError(res, er.message);
  }
});

export default handler;
