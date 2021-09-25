import React from 'react';
import Popup from 'reactjs-popup';
import styles from './TransitionsModal.module.css';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { Backdrop } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

export function TransitionsModal(props: {
  open: boolean;
  handleClose: () => void;
  title: string;
  subTitle?: string;
  handleOkButton: () => void;
  okTextButton: string;
  cancelTextButton: string;
}) {

    return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}>
      <Fade in={props.open}>
        <div className={styles.paper}>
          <ReactMarkdown className={styles.title}>
            {props.title}
          </ReactMarkdown>
          <p className={styles.subTitle} id="transition-modal-description">
            {props.subTitle}
          </p>
          <div className={styles.containerButton}>
            <button onClick={props.handleOkButton} className={styles.okButton}>
              {props.okTextButton}
            </button>
            <button
              onClick={props.handleClose}
              className={styles.cancelButton}>
              {props.cancelTextButton}
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}