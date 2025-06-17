const { supabase } = require('../lib/supabase');

module.exports = async (req, res) => {
  const besok = new Date();
  besok.setDate(besok.getDate() + 1);
  const tanggal = besok.toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('tugas')
    .select('*')
    .eq('date', tanggal);

  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json(data);
  }
};
