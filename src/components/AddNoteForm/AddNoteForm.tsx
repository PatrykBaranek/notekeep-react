import { FormEvent, useContext, useEffect, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import NoteList from '../../model/NoteList';
import { INote } from '../../model/Note';
import { NotesContext } from '../../context/NotesContext';

interface AddNoteFormProps {
  handleCloseForm: () => void;
}

export const AddNoteForm = ({ handleCloseForm }: AddNoteFormProps) => {
  const { handleAddNote } = useContext(NotesContext);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const pinRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = titleRef.current?.value as string;
    const description = descriptionRef.current?.value as string;
    const color = colorRef.current?.value as string;
    const pin = pinRef.current?.checked as boolean;

    const noteList = NoteList.instance;

    const newNote: INote = {
      id: noteList.getNotes().length + 1,
      title,
      description,
      date: new Date(),
      color,
      isPin: pin,
      isDone: false,
      isList: false,
    };

    handleCloseForm();
    handleAddNote(newNote);
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId={'title'}>
        <Form.Label className="text-dark">Title</Form.Label>
        <Form.Control ref={titleRef} type="text" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label className="text-dark">Description</Form.Label>
        <Form.Control ref={descriptionRef} as="textarea" rows={3} required />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3 col-2">
          <Form.Label className="text-dark">Color</Form.Label>
          <Form.Control ref={colorRef} defaultValue={generateRandomColor()} type="color" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3 col-2 gap-1 text-dark">
          <Form.Check ref={pinRef} type="checkbox" label={'Pin?'} />
        </Form.Group>
      </Row>
      <Row>
        <Button variant="success" type="submit">
          Add Note
        </Button>
      </Row>
    </Form>
  );
};
