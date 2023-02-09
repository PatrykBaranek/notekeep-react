import { INote } from '../model/Note';
import NoteList from '../model/NoteList';

export interface StateType {
  notes: INote[];
}

export interface ActionType {
  type: 'ADD_NOTE' | 'REMOVE_NOTE' | 'REMOVE_ALL_NOTES' | 'UPDATE_NOTE';
  payload?: INote;
}

export const initialState: StateType = {
  notes: NoteList.instance.getNotes(),
};

export const notesReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'ADD_NOTE':
      NoteList.instance.add(action.payload as INote);
      return {
        ...state,
        notes: [...NoteList.instance.getNotes()],
      };
    case 'REMOVE_NOTE':
      NoteList.instance.remove(action.payload as INote);
      return {
        ...state,
        notes: [...NoteList.instance.getNotes()],
      };
    case 'REMOVE_ALL_NOTES':
      NoteList.instance.clear();
      return {
        ...state,
        notes: [...NoteList.instance.getNotes()],
      };
    case 'UPDATE_NOTE':
      NoteList.instance.update(action.payload as INote);
      return {
        ...state,
        notes: [...NoteList.instance.getNotes()],
      };
    default:
      return state;
  }
};
