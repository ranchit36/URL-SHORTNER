const URL = require('../models/url');

exports.shortenUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  // Dynamically import nanoid for ESM compatibility
  const { nanoid } = await import('nanoid');

  const shortId = nanoid(8);
  try {
    await URL.create({ shortId, redirectURL: url, visitHistory: [] });
    res.json({ shortId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  try {
    const entry = await URL.findOne({ shortId });
    if (!entry) return res.status(404).send('Not found');

    entry.visitHistory.push({ timestamp: Date.now() });
    await entry.save();

    res.redirect(entry.redirectURL);
  } catch (err) {
    res.status(500).send('Server error');
  }
};