import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';

import styles from './FileLoader.module.css';

class FileLoader extends PureComponent {
  // eslint-disable-next-line
  input = React.createRef();

  onClick = () => {
    this.input.current.click();
  };

  onUpload = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.props.input.onChange(file.name);
    };

    if (file instanceof Blob) {
      reader.readAsText(file);
    }
  };

  render = () => (
    <div className={styles.wrapper}>
      <input
        onChange={this.onUpload}
        ref={this.input}
        className={styles.input}
        type="file"
      />
      <Button type="button" color="teal" onClick={this.onClick}>
        Select a file...
      </Button>
      {this.props.input.value && (
        <div className={styles.file}>
          Selected file: <i>{this.props.input.value}</i>
        </div>
      )}
    </div>
  );
}

export default FileLoader;
