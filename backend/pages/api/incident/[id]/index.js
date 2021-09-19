import nc from "next-connect";
import { rejectWithError,respondWithData} from "../../../../util";
import { createUser, getIncident, updateUser } from "../CRUD";
const handler = nc();


handler.get(async (req, res) => {
  const id = req.query.id;

  try {
    const i = await getIncident(id);

    respondWithData(res, i);
  } catch (er) {
    rejectWithError(res, er.message);
  }
});

export default handler;
