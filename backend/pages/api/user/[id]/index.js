import nc from "next-connect";
import { updateUser, getUser } from "../CRUD";

const handler = nc();

handler.get(async (req, res) => {
  const id = req.query.id;

  try {
    let v = await getUser(id);

    res.json({
      ok: true,
      data: {
        id: v.id,
        name: v.name,
        phone: v.phone,
        redFlags: v.redFlags,
      },
    });
  } catch (er) {
    res.json({ ok: false, error: { msg: er.message } });
  }
});

handler.put(async (req, res) => {
  const id = req.query.id;
  const body = req.body;

  try {
    const uID = await updateUser({ id, ...body });
    res.json({ ok: true, data: { id: uID } });
  } catch (er) {
    res.json({ ok: false, error: { msg: er.message } });
  }
});

export default handler;
