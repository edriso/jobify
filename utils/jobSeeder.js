import 'dotenv/config';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFile } from 'fs/promises';
import connectDB from '../db/connect.js';
import Job from '../models/jobModel.js';

const __dirname = fileURLToPath(import.meta.url);
const jsonFilePath = path.resolve(
  path.dirname(__dirname),
  '../db/jobsMockData.json'
);

try {
  await connectDB(process.env.MONGO_URL);
  const jsonJobs = JSON.parse(await readFile(jsonFilePath));
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: process.env.DEMO_USER_ID };
  });
  await Job.deleteMany({ createdBy: process.env.DEMO_USER_ID });
  await Job.create(jobs);
  console.log('Success');
  process.exit(0);
} catch (error) {
  console.log('Error while seeding jobs', error);
  process.exit(1);
}
