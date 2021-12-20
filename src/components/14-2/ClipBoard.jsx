import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ClipBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      copied: false,
    };
    this.TextArea = React.createRef();
  }

  componentDidMount = () => {
    this.TextArea.current.focus();
  }

  render() {
    return (
      <div className='ui segment' style={{textAlign: 'center'}}>
        <div className='ui text'>
        <textarea
        value={this.state.value}
        onChange={({target: {value}}) => this.setState({value, copied: false})}
        ref={this.TextArea}
        rows="10"
        cols="50"
        />
        </div>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button className='ui button'>Copy to clipboard</button>
        </CopyToClipboard>
        <br />
        {this.state.copied ? <span style={{color: 'red'}}>Copied!</span> : null}
      </div>
    );
  }
}

export default ClipBoard;