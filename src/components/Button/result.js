import React, { Component } from "react";
import { connect } from "react-redux";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class ButtonResult extends Component {
  constructor(props) {
    super(props);

    const initialCode = `
      <div>
      </div>
    `;

    this.state = {
      code: initialCode
    };
  }

  componentDidUpdate(prevProps) {
    const { form } = this.props;

    const values = `
    render() {
      return (
        <div>
          ${(form.contact && form.contact.values && form.contact.values.firstName) || 'null'}
        </div>
      );
    }
      `

    if (prevProps.form !== form) {
      this.setState({ code: values });
    }
  }

  renderCode = () => {
    const { form } = this.props;
    return (
      <div>
        {form.contact && form.contact.values && form.contact.values.firstName}{" "}
      </div>
    );
  };

  render() {
    return (
      <div>
        <SyntaxHighlighter language="javascript" style={atomDark} startingLineNumber>
          {this.state.code}
        </SyntaxHighlighter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form
  };
};

export default connect(mapStateToProps)(ButtonResult);
