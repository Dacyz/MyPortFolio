// /pages/api/getAPI.js

import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://firebasestorage.googleapis.com/v0/b/inserge-application.appspot.com/o/repositorio-Diego%2FCurriculum%20profesional.pdf?alt=media&token=a50923da-fe45-4395-82af-26cdf0f993b4';

const handler = async (_, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=CV Resume.pdf');
  await pipeline(response.body, res);
};

export default handler;