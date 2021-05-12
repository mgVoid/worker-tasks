export enum WorkerDescription {
  ONSITE = "onsite",
  OFFSITE = "offsite",
}

export enum WorkerPosition {
  BUILDER = "builder",
  MANAGER = "manager",
  ACCOUNTANT = "accountant",
  CEO = "ceo",
}

export interface IWorker {
  firstName: string;
  lastName: string;
  position: WorkerPosition;
  description: WorkerDescription;
  isOnContract: boolean;
  salary: number;
}
