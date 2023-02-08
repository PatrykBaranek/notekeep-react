import { useEffect, useMemo, useState } from 'react';
import { INote } from '../model/Note';
import NoteList from '../model/NoteList';

export const useNotes = () => {
  const noteList = NoteList.instance;
  const [notes, setNotes] = useState<INote[]>(noteList.getNotes());

  const notesMemo = useMemo(() => {
    return notes;
  }, [notes]);

  useEffect(() => {
    console.log(notesMemo);
  }, [notesMemo]);

  const saveStateNotes = () => {
    setNotes(noteList.getNotes());
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
    notes: notesMemo,
    handleRemoveAllNotes,
    handleRemoveNote,
    handleUpdateNote,
    handleAddNote,
  };
};
