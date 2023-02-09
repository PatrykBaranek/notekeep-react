import { createContext, useReducer } from 'react';
import { StateType, initialState, notesReducer } from './NotesReducers';
import { INote } from '../model/Note';

interface NotesContextType {
  state: StateType;
  handleAddNote: (note: INote) => void;
  handleDeleteNote: (note: INote) => void;
  handleUpdateNote: (note: INote) => void;
  handleDeleteAllNotes: () => void;
}

const NotesContext = createContext<NotesContextType>({
  state: initialState,
  handleAddNote: () => {},
  handleDeleteNote: () => {},
  handleUpdateNote: () => {},
  handleDeleteAllNotes: () => {},
});

interface NotesProviderProps {
  children: React.ReactNode;
}

const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const handleAddNote = (note: INote) => {
    dispatch({ type: 'ADD_NOTE', payload: note });
  };

  const handleDeleteNote = (note: INote) => {
    dispatch({ type: 'REMOVE_NOTE', payload: note });
  };

  const handleUpdateNote = (note: INote) => {
    dispatch({ type: 'UPDATE_NOTE', payload: note });
  };

  const handleDeleteAllNotes = () => {
    dispatch({ type: 'REMOVE_ALL_NOTES' });
  };

  return (
    <NotesContext.Provider
      value={{ state, handleAddNote, handleDeleteNote, handleUpdateNote, handleDeleteAllNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
