// /pages/api/getAPI.js

import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://firebasestorage.googleapis.com/v0/b/inserge-application.appspot.com/o/repositorio-Diego%2Fresume-en.pdf?alt=media&token=f49a40e8-bbd2-4b2e-9cd1-2c3595a3b744';

const handler = async (_, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=CV Resume.pdf');
  await pipeline(response.body, res);
};

export default handler;