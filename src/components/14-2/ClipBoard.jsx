import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ClipBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      copied: false,
    };
    this.Input = React.createRef();
  }

  componentDidMount = () => {
    this.Input.current.focus();
  }

  render() {
    return (
      <div className='ui segment' style={{textAlign: 'center'}}>
        <div className='ui input'>
        <input
        value={this.state.value}
        onChange={({target: {value}}) => this.setState({value, copied: false})}
        ref={this.Input}
        />
        </div>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button className='ui button'>Copy to clipboard</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied!</span> : null}
      </div>
    );
  }
}

export default ClipBoard;