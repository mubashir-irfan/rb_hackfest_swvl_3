import nc from "next-connect";
import { getTrip } from "./CRUD";

const handler = nc();

handler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const subject = await getTrip(id);
    res.json({
      ok: true,
      data: {
        id: id,
        users: subject.users,
        incidents: subject.incidents,
      },
    });
  } catch (er) {
    res.json({ ok: false, error: { msg: er.message } });
  }
});

export default handler;
