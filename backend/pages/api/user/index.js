import nc from "next-connect";
import { createUser, updateUser } from "./CRUD";
const handler = nc();

handler.post(async (req, res) => {
  const data = req.body;

  const name = data.name;
  if (!name) {
    return res.json({
      ok: false,
      error: { msg: "name field is required" },
    });
  }

  const phone = data.phone;
  if (!phone) {
    return res.json({
      ok: false,
      error: { msg: "phone field is required" },
    });
  }

  try {
    const ID = await createUser({ name, phone });
    res.json({ ok: true, data: { id: ID } });
  } catch (er) {
    res.json({
      ok: false,
      error: { msg: er.message || "Something went wrong" },
    });
  }
});


export default handler;
