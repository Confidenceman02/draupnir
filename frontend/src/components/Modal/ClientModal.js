import React from 'react'
import ReactModal from 'react-modal'
import { Button, FormGroup, ControlLabel, FormControl, Form, Col } from 'react-bootstrap'
import './modal.css'
import ReactDOM from 'react-dom'



class ClientModal extends React.Component {

  submitClient = (event, createClient) => {
  // stop usual for submission behaviour
  event.preventDefault()

  const firstname = ReactDOM.findDOMNode(this.refs.firstname).value
  const lastname = ReactDOM.findDOMNode(this.refs.lastname).value
  const email = ReactDOM.findDOMNode(this.refs.email).value
  const phone = ReactDOM.findDOMNode(this.refs.phone).value
  createClient({ firstname, lastname, email, phone })
  this.props.closeClientModal()
}
  render() {
  return (
  <div>
    <ReactModal
      isOpen={this.props.showAddClientModal}
      contentLabel="Minimal Modal Example" 
      style={{overlay: {
        width: '50%',
        height: '45%',
        margin: 'auto'
      },
      }}
    >
    <h1>Add Client</h1>
    <Form horizontal onSubmit={ (event) => this.submitClient(event, this.props.createClient) }>
      <FormGroup controlId="formHorizontalName">
        <Col componentClass={ControlLabel} sm={2}>
        Firstname
        </Col>
        <Col sm={10}>
        <FormControl type="text" placeholder="firstname" ref="firstname" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Lastname
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="lastname" ref="lastname" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="email" ref="email" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Phone
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="phonenumber" ref="phone"/>
        </Col>
      </FormGroup>
      
      <FormGroup>
        <Col>
        <Button className="saveBtn" bsStyle="primary" type="submit">Save</Button>
        </Col>
      </FormGroup>
    </Form>
          <Button type="submit" onClick={() => this.props.closeClientModal()} bsStyle="default">Cancel</Button>
    </ReactModal>
  </div>
  )}
}

export default ClientModal
