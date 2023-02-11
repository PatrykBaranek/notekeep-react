import { Button, Form } from 'react-bootstrap';
import { INote } from '../../model/Note';
import { useContext, useRef } from 'react';
import { NotesContext } from '../../context/NotesContext';

interface EditNoteFormProps {
  note: INote;
  handleCloseEditForm: () => void;
}

export const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, handleCloseEditForm }) => {
  const { handleUpdateNote } = useContext(NotesContext);

  const textRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const textColorRef = useRef<HTMLInputElement>(null);
  const pinRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = textRef.current?.value as string;
    const description = descriptionRef.current?.value as string;
    const color = colorRef.current?.value as string;
    const textColor = textColorRef.current?.value as string;
    const pin = pinRef.current?.checked as boolean;

    const updatedNote: INote = {
      id: note.id,
      title: title,
      description: description,
      date: note.date,
      color: color,
      textColor: textColor,
      isPin: pin,
      isDone: note.isDone,
      isList: note.isList,
    };

    handleUpdateNote(updatedNote);
    handleCloseEditForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label className="text-dark">Title</Form.Label>
        <Form.Control ref={textRef} type="text" defaultValue={note.title} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label className="text-dark">Description</Form.Label>
        <Form.Control
          ref={descriptionRef}
          as="textarea"
          rows={3}
          defaultValue={note.description}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="color">
        <Form.Label className="text-dark">Color</Form.Label>
        <Form.Control ref={colorRef} type="color" defaultValue={note.color} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="textColor">
        <Form.Label className="text-dark">Text Color</Form.Label>
        <Form.Control ref={textColorRef} type="color" defaultValue={note.textColor} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pin">
        <Form.Check
          ref={pinRef}
          className="text-dark"
          type="checkbox"
          label="Pin?"
          defaultChecked={note.isPin}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};
