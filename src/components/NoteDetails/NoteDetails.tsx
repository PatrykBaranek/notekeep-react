import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NotesContext } from '../../context/NotesContext';
import { INote } from '../../model/Note';

interface NoteDetailsProps {
  noteId: number;
  handleCloseDetails: () => void;
}

export const NoteDetails: React.FC<NoteDetailsProps> = ({ noteId, handleCloseDetails }) => {
  const { state, handleDeleteNote } = useContext(NotesContext);

  const noteDetails = state.notes.find((note) => note.id === noteId);

  return (
    <Container className="text-dark">
      <Row>
        <h2 className="text-center">{noteDetails?.title}</h2>
      </Row>
      <Row>
        <p>{noteDetails?.description}</p>
      </Row>
      <Row>
        <Col>
          <Button variant="warning" style={{ width: '100%' }}>
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
  );
};
