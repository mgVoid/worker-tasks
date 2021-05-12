import faker from "faker";

import type { IWorker } from "../Types/Worker";
import { WorkerDescription, WorkerPosition } from "../Types/Worker";




export default class Worker implements IWorker {
    public firstName: IWorker["firstName"];
    public lastName: IWorker["lastName"];
    public position: IWorker["position"];
    public description: IWorker["description"];
    public salary: IWorker["salary"];
    public isOnContract: IWorker["isOnContract"];

  
  constructor({firstName, lastName, position, description, salary, isOnContract}: IWorker) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.description = description;
    this.salary = salary;
    this.isOnContract = isOnContract;
  } 
  
    static create(){
      return new this({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        position: this.randomPosition,
        description: this.randomDescription,
        salary: faker.datatype.number(),
        isOnContract: faker.datatype.boolean(),
      });
    }

  static get randomDescription() {
    return faker.random.arrayElement(Object.values(WorkerDescription));

  }

  static get randomPosition() {
    return faker.random.arrayElement(Object.values(WorkerPosition));
  }
}

