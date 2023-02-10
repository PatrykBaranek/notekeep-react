import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NotesContext } from '../../context/NotesContext';
import { INote } from '../../model/Note';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import { EditNoteForm } from '../EditNoteForm/EditNoteForm';

interface NoteDetailsProps {
  noteId: number;
  handleCloseDetails: () => void;
}

export const NoteDetails: React.FC<NoteDetailsProps> = ({ noteId, handleCloseDetails }) => {
  const { state, handleDeleteNote } = useContext(NotesContext);
  const [openEditForm, setOpenEditForm] = useState(false);

  const handleOpenEditForm = () => {
    setOpenEditForm(true);
  };

  const handleCloseEditForm = () => {
    setOpenEditForm(false);
  };

  const noteDetails = state.notes.find((note) => note.id === noteId);

  if (openEditForm) {
    return (
      <ModalComponent show={openEditForm} handleCloseModal={handleCloseEditForm}>
        <EditNoteForm note={noteDetails as INote} handleCloseEditForm={handleCloseDetails} />
      </ModalComponent>
    );
  }

  return (
    <>
      <Container className="text-dark">
        <Row>
          <h2 className="text-center">{noteDetails?.title}</h2>
        </Row>
        <Row>
          <p>{noteDetails?.description}</p>
        </Row>
        <Row>
          <Col>
            <Button variant="warning" style={{ width: '100%' }} onClick={handleOpenEditForm}>
              Edit Note
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              style={{ width: '100%' }}
              onClick={() => {
                handleDeleteNote(noteDetails as INote);
                handleCloseDetails();
              }}
            >
              Delete Note
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
