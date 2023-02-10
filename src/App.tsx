import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { ModalComponent } from './components/ModalComponent/ModalComponent';
import { AddNoteForm } from './components/AddNoteForm/AddNoteForm';
import { Notes } from './components/Notes/Notes';
import { NotesContext } from './context/NotesContext';

const App = () => {
  const [openNewNoteForm, setOpenNewNoteForm] = useState<boolean>(false);
  const { state, handleDeleteAllNotes } = useContext(NotesContext);

  const handleOpenForm = () => setOpenNewNoteForm(true);
  const handleCloseForm = () => setOpenNewNoteForm(false);

  if (openNewNoteForm) {
    return (
      <ModalComponent show={openNewNoteForm} handleCloseModal={handleCloseForm}>
        <AddNoteForm handleCloseForm={handleCloseForm} />
      </ModalComponent>
    );
  }

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center gap-4">
          <Button className="col-3" variant="outline-success" onClick={handleOpenForm}>
            Add Note
          </Button>
          <Button className="col-3" variant="outline-danger" onClick={handleDeleteAllNotes}>
            Remove All Notes
          </Button>
        </Row>
      </Container>
      <Notes notes={state.notes} />
    </>
  );
};

export default App;
