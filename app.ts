import Worker from "./Models/Worker";
import { randomNumber } from "./Utils/Helpers";
import "./Utils/Validation";

const minWorkers = parseInt(process.env.MIN_WORKERS as string, 10);
const maxWorkers = parseInt(process.env.MAX_WORKERS as string, 10);
const workers = [...Array(randomNumber(minWorkers, maxWorkers))].map(() => Worker.create());
console.log(workers);


