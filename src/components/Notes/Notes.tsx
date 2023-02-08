import { Card, Col, Container, Row } from 'react-bootstrap';
import { INote } from '../../model/Note';
import { useState } from 'react';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import { NoteDetails } from '../NoteDetails/NoteDetails';

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

  return (
    <>
      <Container className="my-5 ">
        <h1 className="text-light text-center mb-5">Notes</h1>
        <Row className="gap-3 d-flex justify-content-center align-items-start">
          {notes.map((note) => (
            <Col key={note.id} sm={12} lg={4} xl={3}>
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
                <Card.Body>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {openDetails && (
        <ModalComponent show={openDetails} handleCloseModal={handleCloseDetails}>
          <NoteDetails noteId={noteId} />
        </ModalComponent>
      )}
    </>
  );
};
