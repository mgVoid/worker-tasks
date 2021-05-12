import faker from 'faker';

enum WorkerDescription {
  ONSITE = "onsite",
  OFFSITE = "offsite",
}

enum WorkerPosition {
  BUILDER = "builder",
  MANAGER = "manager",
  ACCOUNTANT = "accountant",
  CEO = "ceo",
}

interface IWorker {
  firstName: string;
  lastName: string;
  position: WorkerPosition;
  description: WorkerDescription;
  isOnContract: boolean;
  salary: number;
}

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomPosition = () => faker.random.arrayElement(Object.values(WorkerPosition));
const randomDescription = () => faker.random.arrayElement(Object.values(WorkerDescription));

// const worker: IWorker = {
//   firstName: faker.name.firstName(),
//   lastName: faker.name.lastName(),
//   position: randomPosition(),
//   description: randomDescription(),
//   salary: faker.datatype.number(),
//   isOnContract: faker.datatype.boolean(),
// }

const randomObjects: Array<IWorker> = [...Array(randomNumber(5, 10))].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  position: randomPosition(),
  description: randomDescription(),
  salary: faker.datatype.number(),
  isOnContract: faker.datatype.boolean(),
}));

console.log(randomObjects);

export {}
