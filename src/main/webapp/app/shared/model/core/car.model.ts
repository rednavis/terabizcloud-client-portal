export interface ICar {
  id?: number;
  model?: string;
  price?: number;
}

export class Car implements ICar {
  constructor(public id?: number, public model?: string, public price?: number) {}
}
