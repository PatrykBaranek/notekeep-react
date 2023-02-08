export interface INote {
  id: number;
  title: string;
  description: string;
  color: string;
  date: Date;
  isPin: boolean;
  isDone: boolean;
  isList: boolean;
}

export default class Note implements INote {
  id: number;
  title: string;
  description: string;
  date: Date;
  color: string;
  isPin: boolean;
  isDone: boolean;
  isList: boolean;

  constructor(
    id: number = 0,
    title: string = '',
    description: string = '',
    color: string = '#000',
    date: Date = new Date(),
    isPin: boolean = false,
    isDone: boolean = false,
    isList: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.color = color;
    this.date = date;
    this.isPin = isPin;
    this.isDone = isDone;
    this.isList = isList;
  }
}
