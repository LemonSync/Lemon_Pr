const { supabase } = require('../lib/supabase');

module.exports = async (req, res) => {
  const token = req.query.token;
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Token salah' });
  }

  if (req.method === 'POST') {
    const { title, date } = req.body;
    const { data, error } = await supabase.from('tugas').insert([{ title, date }]);
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  res.status(405).end(); // Method Not Allowed
};
