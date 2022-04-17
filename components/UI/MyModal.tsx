import { Modal, Button } from "react-bootstrap";
import { FC, MouseEvent, useEffect } from "react";

interface IMyModal {
  onAction: () => void;
  title: string;
  body: string;
  textBtn: string;
}

const MyModal: FC<IMyModal> = ({
  onAction,
  title,
  body,
  children,
  textBtn,
}) => {
  useEffect(() => {
    document.body.classList.add("modal_body");
    return () => document.body.classList.remove("modal_body");
  }, []);

  return (
    <div className="modal" onClick={() => onAction()}>
      <Modal.Dialog onClick={(e: MouseEvent) => e.stopPropagation()}>
        <div className="p-3">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body className="py-4">
            <p className="mb-0">{body}</p>
          </Modal.Body>

          <Modal.Footer>
            {children}

            <Button variant="primary" onClick={() => onAction()}>
              {textBtn}
            </Button>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>
  );
};

export default MyModal;
