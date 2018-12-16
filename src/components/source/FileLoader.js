import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import styles from './FileLoader.module.css';

class FileLoader extends PureComponent {
  // eslint-disable-next-line
  input = React.createRef();
  state = {
    fileName: null,
  };

  onClick = () => {
    this.input.current.click();
  };

  onUpload = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        fileName: file.name,
      });
    };

    if (file instanceof Blob) {
      reader.readAsText(file);
    }
  };

  render = () => {
    const { fileName } = this.state;

    return (
      <div>
        <input
          onChange={this.onUpload}
          ref={this.input}
          className={styles.input}
          type="file"
        />
        <Button type="button" color="teal" onClick={this.onClick}>
          Select a file...
        </Button>
        {fileName && <div>{fileName}</div>}
      </div>
    );
  };
}

export default FileLoader;
