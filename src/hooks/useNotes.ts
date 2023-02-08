import { useEffect, useMemo, useState } from 'react';
import { INote } from '../model/Note';
import NoteList from '../model/NoteList';

export const useNotes = () => {
  const noteList = NoteList.instance;
  const [notes, setNotes] = useState<INote[]>([...noteList.getNotes()]);

  useEffect(() => {
    saveStateNotes();
  }, [noteList.getNotes]);

  const saveStateNotes = () => {
    console.log('notes localhost', noteList.getNotes());
    setNotes([...noteList.getNotes()]);
    console.log('notes state', notes);
  };

  const handleRemoveAllNotes = () => {
    noteList.clear();
    saveStateNotes();
  };

  const handleRemoveNote = (note: INote) => {
    noteList.remove(note);
    saveStateNotes();
  };

  const handleUpdateNote = (note: INote) => {
    noteList.update(note);
    saveStateNotes();
  };

  const handleAddNote = (note: INote) => {
    noteList.add(note);
    saveStateNotes();
  };

  return {
    notes,
    handleRemoveAllNotes,
    handleRemoveNote,
    handleUpdateNote,
    handleAddNote,
  };
};
