import { Card, Col, Container, Row } from 'react-bootstrap';
import { INote } from '../../model/Note';
import { useState } from 'react';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import { NoteDetails } from '../NoteDetails/NoteDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

interface NotesProps {
  notes: INote[];
}

export const Notes = ({ notes }: NotesProps) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [noteId, setNoteId] = useState<number>(1);

  const handleOpenDetails = (noteId: number) => {
    setOpenDetails(true);
    setNoteId(noteId);
  };
  const handleCloseDetails = () => setOpenDetails(false);

  const sortNotes = () => {
    const pinned = notes.filter((note) => note.isPin);
    const unpinned = notes.filter((note) => !note.isPin);
    return [...pinned, ...unpinned];
  };

  notes = sortNotes();

  if (openDetails) {
    return (
      <ModalComponent show={openDetails} handleCloseModal={handleCloseDetails}>
        <NoteDetails noteId={noteId} handleCloseDetails={handleCloseDetails} />
      </ModalComponent>
    );
  }

  return (
    <>
      <Container className="my-5 ">
        <h1 className="text-light text-center mb-5">Notes</h1>
        <Row className="gap-3 d-flex justify-content-center align-items-start">
          {notes.map((note, index) => (
            <Col key={index} sm={12} md={5} lg={4} xl={3}>
              <Card
                style={{
                  backgroundColor: note.color,
                  color: 'whitesmoke',
                  height: '300px',
                  cursor: 'pointer',
                }}
                onClick={() => handleOpenDetails(note.id)}
                title="Click to see details"
              >
                {note.isPin && (
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="text-dark position-absolute"
                    style={{ right: 10, top: 5, fontSize: '1.75rem' }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>{note.date}</Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
