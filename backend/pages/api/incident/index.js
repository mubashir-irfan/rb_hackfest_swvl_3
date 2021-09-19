import nc from "next-connect";
import { rejectWithError, respondWithData } from "../../../util";
import { createIncident } from "./CRUD";

const handler = nc();

handler.post(async (req, res) => {
  const { title, description, tripId, type, severity, subjectId, reporterId } =
    req.body;

    console.log('HELLo');
  console.log(
    title,
    description,
    tripId,
    type,
    severity,
    subjectId,
    reporterId
  );

  if (
    !title ||
    !description ||
    !tripId ||
    type === undefined ||
    type === null ||
    !severity === undefined ||
    !severity === null ||
    !subjectId ||
    !reporterId
  ) {
    return rejectWithError(res, "Required field is/are missing.");
  }

  try {
    const id = await createIncident({
      title,
      description,
      tripId,
      type,
      severity,
      subjectId,
      reporterId,
    });

    respondWithData(res, {
      id,
    });
  } catch (er) {
    return rejectWithError(res, er.message);
  }
});

export default handler;
