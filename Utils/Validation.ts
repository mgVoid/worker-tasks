import "dotenv/config";
import { cleanEnv, str} from 'envalid'

const env = () =>
cleanEnv(process.env, {
  MIN_WORKERS: str(),
  MAX_WORKERS: str(),
});

env();