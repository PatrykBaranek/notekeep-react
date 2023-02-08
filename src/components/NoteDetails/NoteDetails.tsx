import { Button, Container, Row } from 'react-bootstrap';
import { useNotes } from '../../hooks/useNotes';

interface NoteDetailsProps {
  noteId: number;
}

export const NoteDetails: React.FC<NoteDetailsProps> = ({ noteId }) => {
  const { notes } = useNotes();

  const noteDetails = notes.find((note) => note.id === noteId);

  return (
    <Container className="text-dark">
      <Row>
        <h2 className="text-center">{noteDetails?.title}</h2>
      </Row>
      <Row>
        <p>{noteDetails?.description}</p>
      </Row>
      <Row>
        <Button variant="warning">Edit Note</Button>
      </Row>
    </Container>
  );
};
