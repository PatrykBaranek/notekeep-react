export interface INote {
  id: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  date: string;
  isPin: boolean;
  isDone: boolean;
  isList: boolean;
}

export default class Note implements INote {
  id: number;
  title: string;
  description: string;
  date: string;
  color: string;
  textColor: string;
  isPin: boolean;
  isDone: boolean;
  isList: boolean;

  constructor(
    id: number = 0,
    title: string = '',
    description: string = '',
    color: string = '#000',
    textColor: string = '#fff',
    date: Date = new Date(),
    isPin: boolean = false,
    isDone: boolean = false,
    isList: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.color = color;
    this.textColor = textColor;
    this.date = date.toLocaleString();
    this.isPin = isPin;
    this.isDone = isDone;
    this.isList = isList;
  }
}
