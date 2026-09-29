import React, { useEffect } from 'react';
import styles from './TransitionsModal.module.css';
import ReactMarkdown from 'react-markdown';

export function TransitionsModal(props: {
  open: boolean;
  handleClose: () => void;
  title: string;
  subTitle?: string;
  handleOkButton: () => void;
  okTextButton: string;
  cancelTextButton?: string;
}) {
  const { open, handleClose } = props;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.paper}
        onClick={(event) => event.stopPropagation()}>
        <div id="transition-modal-title" className={styles.title}>
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </div>
        {props.subTitle && (
          <p className={styles.subTitle} id="transition-modal-description">
            {props.subTitle}
          </p>
        )}
        <div className={styles.containerButton}>
          <button onClick={props.handleOkButton} className={styles.okButton}>
            {props.okTextButton}
          </button>
          {props.cancelTextButton && (
            <button onClick={handleClose} className={styles.cancelButton}>
              {props.cancelTextButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
