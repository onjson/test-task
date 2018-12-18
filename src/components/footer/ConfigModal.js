import React from 'react';
import { Modal } from 'semantic-ui-react';
import ReactJson from 'react-json-view';

const ConfigModal = ({ data, ...rest }) => (
  <Modal {...rest} closeIcon>
    <Modal.Header>Configuration JSON</Modal.Header>
    <Modal.Content scrolling>
      <Modal.Description>
        <ReactJson
          src={data}
          displayDataTypes={false}
          displayObjectSize={false}
          enableClipboard={false}
          name={false}
        />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ConfigModal;
