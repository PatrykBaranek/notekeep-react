import { INote } from './Note';

export interface INoteList {
  clear(): void;
  add(note: INote): void;
  update(note: INote): void;
  remove(note: INote): void;
  getNotes(): INote[];
  saveToLocalStorage(): void;
}

export default class NoteList implements INoteList {
  public static instance = new NoteList();

  constructor(private _notes: INote[] = []) {}

  public saveToLocalStorage(): void {
    localStorage.setItem('my-notes', JSON.stringify(this._notes));
  }

  public getNotes(): INote[] {
    if (!localStorage.getItem('my-notes')) {
      return (this._notes = []);
    }
    if (this._notes.length > 0) {
      return this._notes;
    }

    this._notes = JSON.parse(localStorage.getItem('my-notes') as string) as INote[];

    return this._notes;
  }

  public add(note: INote): void {
    if (this._notes.find((n) => n.id === note.id)) return;
    this._notes.push(note);
    this.saveToLocalStorage();
  }

  public update(note: INote): void {
    const index = this._notes.findIndex((n) => n.id === note.id);
    this._notes[index] = note;
    this.saveToLocalStorage();
  }

  public remove(note: INote): void {
    this._notes = this._notes.filter((n) => n.id !== note.id);
    this.saveToLocalStorage();
  }

  public clear(): void {
    this._notes = [];
    this.saveToLocalStorage();
  }
}
