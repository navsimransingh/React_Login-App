import React from 'react';


class InputField extends React.Component {
  render() {
    return (
      <div className="inputField">
        <input
          className='input'
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onChange(e.target.value)}

        />

      </div>
    );
  }
}

export default InputField;
