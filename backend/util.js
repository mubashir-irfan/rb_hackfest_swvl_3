export function rejectWithError(res, errorMessage) {
  res.json({ ok: false, error: { msg: errorMessage } });
}

export function respondWithData(res, data) {
  res.json({ ok: true, data });
}
