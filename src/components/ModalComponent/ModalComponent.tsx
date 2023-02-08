import { ReactNode } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
}

export const ModalComponent = ({ show, handleCloseModal, children }: ModalProps) => {
  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
