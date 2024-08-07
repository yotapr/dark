"use client"
import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  ModalBody,
  ModalFooter,
  FormFeedback
} from "reactstrap";
import { useDispatch, useSelector } from "@/store/hooks";
import { addContact, AddContactItem } from "@/store/apps/contacts/ContactSlice";

const ContactAdd = ({ click }) => {
  const id = useSelector((state) => state.contactsReducer.contacts.length);
  const dispatch = useDispatch();
  const [error, setError] = React.useState({
    companyName: "Valore richiesto",
    address: "Valore richiesto",
    phoneNumber: "Valore richiesto",
    email: "Valore richiesto"
  })
  const [values, setValues] = React.useState({
    companyName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const [otherContacts, setOtherContacts] = React.useState([]);
  
  const handleAddElementContact = () => {
    setOtherContacts([...otherContacts, {
      contactsName: '',
      contactsPhone: '',
      contactsEmail: ''
    }]);
  };

  const removeElementContact = async (index) => {
    const newElements = [...otherContacts];
    newElements.splice(index, 1);
    setOtherContacts(newElements);
  };

  const handleChangeContacts = async (event, index) => {
    const newElements = [...otherContacts];
    if (event.target.name === 'contactsName') {
      newElements[index].contactsName = event.target.value;
    } else if (event.target.name === 'contactsPhone') {
      newElements[index].contactsPhone = event.target.value;
    } else {
      newElements[index].contactsEmail = event.target.value;
    }
    setOtherContacts(newElements);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      AddContactItem({
        id: id,
        companyName: values.companyName,
        address: values.address,
        taxCode: values.taxCode,
        vatNumber: values.vatNumber,
        phoneNumber: values.phoneNumber,
        email: values.email,
        contactName: values.contactName,
        contactPhone: values.contactPhone,
        contactEmail: values.contactEmail,
        clientCode: values.clientCode,
        startDate: values.startDate,
        dossier: values.dossier,
        creditLimit: values.creditLimit,
        sdiCode: values.sdiCode,
        invoiceCode: values.invoiceCode,
        website: values.website,
        note: values.note,
        commercialNote: values.note,
        otherContact: otherContacts
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ModalBody>
        <Row>
          {/*<Col md={6} className="text-center">
            <Image
              src={user1}
              className="rounded-circle"
              alt={id}
              width="100"
            />
          </Col>*/}
          <Col md={12}>
            <FormGroup>
              <Label for="companyName">Ragione sociale</Label>
              <Input
                className="form-control"
                type="text"
                name="companyName"
                id="companyName"
                value={values.companyName}
                onChange={(e) => {
                  setValues({ ...values, companyName: e.target.value })
                  e.target.value.length !== 0 && setError({...error, companyName: ""})
                  e.target.value.length === 0 && setError({...error, companyName: "Valore richiesto"})
                }}
                required
                invalid={error.companyName.length === 0 ? false : true}
              />
              <FormFeedback >
                { error.companyName }
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="address">Indirizzo</Label>
              <Input
                className="form-control"
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={(e) => {
                  setValues({ ...values, address: e.target.value })
                  e.target.value.length !== 0 && setError({...error, address: ""})
                  e.target.value.length === 0 && setError({...error, address: "Valore richiesto"})
                }}
                required
                invalid={error.address.length === 0 ? false : true}
              />
              <FormFeedback >
                { error.address }
              </FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="taxCode">Codice fiscale</Label>
              <Input
                className="form-control"
                type="text"
                name="taxCode"
                id="taxCode"
                value={values.taxCode}
                onChange={(e) =>
                  setValues({ ...values, taxCode: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="vatNumber">P. Iva</Label>
              <Input
                className="form-control"
                type="text"
                name="vatNumber"
                id="vatNumber"
                value={values.vatNumber}
                onChange={(e) =>
                  setValues({ ...values, vatNumber: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Numero di telefono</Label>
              <Input
                className="form-control"
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={(e) => {
                  setValues({ ...values, phoneNumber: e.target.value })
                  e.target.value.length !== 0 && setError({...error, phoneNumber: ""})
                  e.target.value.length === 0 && setError({...error, phoneNumber: "Valore richiesto"})
                }}
                required
                invalid={error.phoneNumber.length === 0 ? false : true}
              />
              <FormFeedback >
                { error.phoneNumber }
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value })
                  e.target.value.length !== 0 && e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && setError({...error, email: ""})
                  e.target.value.length === 0 || !e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && setError({...error, email: "Valore richiesto"})
                }}
                required
                invalid={error.email.length === 0 ? false : true}
              />
              <FormFeedback >
                { error.email }
              </FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="contactName">Nome contatto</Label>
              <Input
                className="form-control"
                type="text"
                name="contactName"
                id="contactName"
                value={values.contactName}
                onChange={(e) =>
                  setValues({ ...values, contactName: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="contactPhone">Telefono contatto</Label>
              <Input
                className="form-control"
                type="phoneNumber"
                name="contactPhone"
                id="contactPhone"
                value={values.contactPhone}
                onChange={(e) =>
                  setValues({ ...values, contactPhone: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="contactEmail">Email contatto</Label>
              <Input
                className="form-control"
                type="email"
                name="contactEmail"
                id="contactEmail"
                value={values.contactEmail}
                onChange={(e) =>
                  setValues({ ...values, contactEmail: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <>
        { otherContacts.map((singleOtherContact, index) => 
          <>
          <Row>  
          <Col md={6}>
            <FormGroup>
            <Label for="contactsName">Nome contatto</Label>
              <Input
                type="text"
                name="contactsName"
                id="contactsName"
                value={singleOtherContact.contactsName}
                onChange={(event) => handleChangeContacts(event, index)}
              />
              <br/>
              </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Label for="contactsPhone">Telefono contatto</Label>
              <Input
                type="text"
                name="contactsPhone"
                id="contactsPhone"
                value={singleOtherContact.contactsPhone}
                onChange={(event) => handleChangeContacts(event, index)}
              />
              <br/>
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
            <FormGroup>
            <Label for="contactsEmail">Email contatto</Label>
              <Input
                type="text"
                name="contactsEmail"
                id="contactsEmail"
                value={singleOtherContact.contactsEmail}
                onChange={(event) => handleChangeContacts(event, index)}
              />
              <br/>
            </FormGroup>
          </Col>
            <Col md={6}>
              <Button color="danger" type="button" onClick={() => removeElementContact(index)}>Rimuovi elemento</Button>
            </Col>  
          </Row>
          </>)}
        <Button color="primary" type="button" onClick={handleAddElementContact}>Aggiungi elemento</Button>
        </>
        <Row>  
          <Col md={6}>
            <FormGroup>
              <Label for="clientCode">Codice cliente</Label>
              <Input
                className="form-control"
                type="text"
                name="clientCode"
                id="clientCode"
                value={values.clientCode}
                onChange={(e) =>
                  setValues({ ...values, clientCode: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="startDate">Data inizio</Label>
              <Input
                className="form-control"
                type="date"
                name="startDate"
                id="startDate"
                value={values.startDate}
                onChange={(e) =>
                  setValues({ ...values, startDate: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="dossier">Dossier</Label>
              <Input
                className="form-control"
                type="text"
                name="dossier"
                id="dossier"
                value={values.dossier}
                onChange={(e) =>
                  setValues({ ...values, dossier: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="creditLimit">Limite di credito (valore numerico)</Label>
              <Input
                className="form-control"
                type="text"
                name="creditLimit"
                id="creditLimit"
                value={values.creditLimit}
                onChange={(e) =>
                  e.target.value.match(/^\d+$/) ? setValues({ ...values, creditLimit: e.target.value }) : e.target.value === "" && setValues({ ...values, creditLimit: "0" })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="dossier">SDI</Label>
              <Input
                className="form-control"
                type="text"
                name="sdiCode"
                id="sdiCode"
                value={values.sdiCode}
                onChange={(e) =>
                  setValues({ ...values, sdiCode: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="invoiceCode">Codice fatturazione</Label>
              <Input
                className="form-control"
                type="text"
                name="invoiceCode"
                id="invoiceCode"
                value={values.invoiceCode}
                onChange={(e) =>
                  setValues({ ...values, invoiceCode: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="website">Website</Label>
              <Input
                className="form-control"
                type="text"
                name="website"
                id="website"
                value={values.website}
                onChange={(e) =>
                  setValues({ ...values, website: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="note">Note</Label>
              <Input
                className="form-control"
                type="textarea"
                name="note"
                id="note"
                value={values.note}
                onChange={(e) =>
                  setValues({ ...values, note: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="submit"
          onClick={click}
          disabled={error.companyName.length !== 0 || error.address.length !== 0 || error.phoneNumber.length !== 0 || error.email.length !== 0}
        >
          Aggiungi Contatto
        </Button>
      </ModalFooter>
    </Form>
  );
};

ContactAdd.propTypes = {
  click: PropTypes.any,
};

export default ContactAdd;
