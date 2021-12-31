import React, { Component } from 'react';
import Opinion, { fullCaseName } from '../interfaces/Opinion'
import CaseService from '../services/CaseService'
import './OpinionDisplay.scss';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

type OpinionHtmlProps = {
    opinion: Opinion;
}

class OpinionHtml extends Component<OpinionHtmlProps> {
  constructor (props: OpinionHtmlProps) {
    super(props)
    this.state = { html: [] }
  }

  componentDidMount() {
    var cs: CaseService = new CaseService()
	cs.getCaseHtml(this.props.opinion).then(response => this.setState({html: response.data}));
  }

  render () {
    const { html } = this.state;
    return html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : (
      <span>Loading case text...</span>
    );
  }
}

export default OpinionHtml;
