import { useContext } from 'react';
import { Notes } from './components/Notes/Notes';
import { NotesContext } from './context/NotesContext';
import { Navigation } from './components/Navigation/Navigation';

const App = () => {
  const { state } = useContext(NotesContext);

  return (
    <>
      <Navigation />
      <Notes notes={state.notes} />
    </>
  );
};

export default App;
