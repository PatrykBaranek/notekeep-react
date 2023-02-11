import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AddNoteForm } from '../AddNoteForm/AddNoteForm';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import { NotesContext } from '../../context/NotesContext';

export const Navigation: React.FC = () => {
  const [openNewNoteForm, setOpenNewNoteForm] = useState<boolean>(false);
  const { handleDeleteAllNotes } = useContext(NotesContext);

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
    <Container className="mt-3">
      <Row className="d-flex justify-content-center gap-4">
        <Col xs={5}>
          <Button variant="success" style={{ width: '100%' }} onClick={handleOpenForm}>
            Add Note
          </Button>
        </Col>
        <Col xs={5}>
          <Button variant="danger" style={{ width: '100%' }} onClick={handleDeleteAllNotes}>
            Remove All Notes
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
