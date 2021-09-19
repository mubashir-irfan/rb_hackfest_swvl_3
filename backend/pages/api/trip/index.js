import nc from "next-connect";
import { getDB } from "../../../firebase/client";
import { createTrip } from "./CRUD";

const handler = nc();

handler.get((req, res) => {
  const id = req.query.id;
  res.json({
    ok: false,
    error: { msg: "End point is not ready" },
  });
});

handler.post(async (req, res) => {
  const data = req.body;

  const users = data.users || [];
  const incidents = data.incidents || [];

  try {
    const ID = await createTrip({ users, incidents });
    res.json({ ok: true, data: { id: ID } });
  } catch (er) {
    res.json({
      ok: false,
      error: { msg: er.message || "Something went wrong" },
    });
  }
});

export default handler;
