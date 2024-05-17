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
import { addContact, AddContactItem } from "@/store/apps/providers/ProviderSlice";

const ContactAdd = ({ click }) => {
  const id = useSelector((state) => state.contactsReducer.contacts.length);
  const dispatch = useDispatch();
  const [error, setError] = React.useState({
    companyName: "Valore richiesto",
    address: "Valore richiesto",
    phone: "Valore richiesto",
    email: "Valore richiesto"
  })
  const [values, setValues] = React.useState({
    companyName: "",
    address: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      AddContactItem({
        id: id,
        companyName: values.companyName,
        address: values.address,
        taxCode: values.taxCode,
        vatNumber: values.vatNumber,
        phone: values.phone,
        email: values.email,
        contactName: values.contactName,
        contactPhone: values.contactPhone,
        contactEmail: values.contactEmail,
        providerCode: values.providerCode,
        startDate: values.startDate,
        paymentMethod: values.paymentMethod,
        creditLimit: values.creditLimit,
        sdiCode: values.sdiCode,
        invoiceCode: values.invoiceCode,
        website: values.website,
        note: values.note,
        commercialNote: values.note
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
              <Label for="taxCode">taxCode</Label>
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
              <Label for="phone">phone</Label>
              <Input
                className="form-control"
                type="phone"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={(e) => {
                  setValues({ ...values, phone: e.target.value })
                  e.target.value.length !== 0 && setError({...error, phone: ""})
                  e.target.value.length === 0 && setError({...error, phone: "Valore richiesto"})
                }}
                required
                invalid={error.phone.length === 0 ? false : true}
              />
              <FormFeedback >
                { error.phone }
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
                type="text"
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
          <Col md={6}>
            <FormGroup>
              <Label for="providerCode">Codice cliente</Label>
              <Input
                className="form-control"
                type="text"
                name="providerCode"
                id="providerCode"
                value={values.providerCode}
                onChange={(e) =>
                  setValues({ ...values, providerCode: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="startDate">startDate</Label>
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
              <Label for="paymentMethod">paymentMethod</Label>
              <Input
                className="form-control"
                type="text"
                name="paymentMethod"
                id="paymentMethod"
                value={values.paymentMethod}
                onChange={(e) =>
                  setValues({ ...values, paymentMethod: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="creditLimit">creditLimit (valore numerico)</Label>
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
              <Label for="sdiCode">SDI</Label>
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
              <Label for="invoiceCode">invoiceCode</Label>
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
              <Label for="website">website</Label>
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
              <Label for="note">note</Label>
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
          disabled={error.companyName.length !== 0 || error.address.length !== 0 || error.phone.length !== 0 || error.email.length !== 0}
        >
          Add Contact
        </Button>
      </ModalFooter>
    </Form>
  );
};

ContactAdd.propTypes = {
  click: PropTypes.any,
};

export default ContactAdd;
