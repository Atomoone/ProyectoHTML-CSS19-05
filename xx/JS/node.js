app.post('/crear-transaccion', async (req, res) => {
  const { items } = req.body;
  const sessionId = uniqueSession(); // genera un ID, puede ser timestamp
  const total = items.reduce((s, i) => s + i.monto, 0);
  const init = await WebpayPlus.Transaction.create(sessionId, 'orden123', total, 'https://tu-sitio.com/retorno');
  res.json({ url: init.url });
});

app.get('/retorno', async (req, res) => {
  const token = req.query.token_ws;
  const result = await WebpayPlus.Transaction.commit(token);
  // Aquí puedes mostrar resultado o redirigir a una página de "gracias".
});
