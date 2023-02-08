import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { ModalComponent } from './components/ModalComponent/ModalComponent';
import { AddNoteForm } from './components/AddNoteForm/AddNoteForm';
import { Notes } from './components/Notes/Notes';
import { useNotes } from './hooks/useNotes';

const App = () => {
  const [openNewNoteForm, setOpenNewNoteForm] = useState<boolean>(false);
  const { notes, handleRemoveAllNotes } = useNotes();

  const handleOpenForm = () => setOpenNewNoteForm(true);
  const handleCloseForm = () => setOpenNewNoteForm(false);

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center gap-4">
          <Button className="col-3" variant="outline-success" onClick={handleOpenForm}>
            Add Note
          </Button>
          <Button className="col-3" variant="outline-danger" onClick={handleRemoveAllNotes}>
            Remove All Notes
          </Button>
          {openNewNoteForm && (
            <ModalComponent show={openNewNoteForm} handleCloseModal={handleCloseForm}>
              <AddNoteForm handleCloseForm={handleCloseForm} />
            </ModalComponent>
          )}
        </Row>
      </Container>
      <Notes notes={notes} />
    </>
  );
};

export default App;
