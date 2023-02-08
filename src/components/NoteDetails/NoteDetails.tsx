import { Container, Row } from 'react-bootstrap';
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
        <h1 className="text-center">{noteDetails?.title}</h1>
      </Row>
      <Row>
        <p>{noteDetails?.description}</p>
      </Row>
    </Container>
  );
};
