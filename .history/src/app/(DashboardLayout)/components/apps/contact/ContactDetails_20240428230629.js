"use client"
import React from "react";
import { useDispatch, useSelector } from "@/store/hooks";
import { Button, Input } from "reactstrap";
import Image from "next/image";
import {
  isEdit,
  UpdateContact,
} from "@/store/apps/contacts/ContactSlice";

const ContactDetails = () => {
  
  const contactDetail = useSelector( (state) => state.contactsReducer.contacts[state.contactsReducer.contactContent])

  const [contactDetailEdit, setContactDetailEdit]  = React.useState({})

  const contactContent = useSelector((state) => state.contactsReducer.contactContent);

  const editContact = useSelector((state) => state.contactsReducer.editContact);
  
  const dispatch = useDispatch();
  //payload.id,payload.companyName,payload.address,payload.image,payload.taxCode,payload.vatNumber,payload.phoneNumber,payload.email,payload.contactName,payload.contactPhone,payload.contactEmail,payload.clientCode,payload.startDate,payload.dossier,payload.creditLimit,payload.sdiCode,payload.invoiceCode,payload.website,payload.note
  return (
    <>
      {contactDetail ? (
        <div>
          {/***********Contact Topbar**************/}
          <div className="d-flex align-items-center p-3 border-bottom">
            <div className="mx-2">
              <h5 className="mb-0">
                {contactDetail.companyName} 
              </h5>
              <small>{contactDetail.address}</small>
            </div>
          </div>

          {/***********Contact Edit box**************/}
          <div className="p-4">
            {!editContact ? (
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td width="150">
                      <h6>companyName </h6>
                    </td>
                    <td>: {contactDetail.companyName}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>address</h6>
                    </td>
                    <td>: {contactDetail.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Partita Iva</h6>
                    </td>
                    <td>: {contactDetail.vatNumber}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>taxCode</h6>
                    </td>
                    <td>: {contactDetail.taxCode}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Email</h6>
                    </td>
                    <td>: {contactDetail.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>phoneNumber</h6>
                    </td>
                    <td>: {contactDetail.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>contactName</h6>
                    </td>
                    <td>: {contactDetail.contactName}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>contactPhone</h6>
                    </td>
                    <td>: {contactDetail.contactPhone}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>contactEmail</h6>
                    </td>
                    <td>: {contactDetail.contactEmail}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>clientCode</h6>
                    </td>
                    <td>: {contactDetail.clientCode}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>dossier</h6>
                    </td>
                    <td>: {contactDetail.dossier}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>creditLimit</h6>
                    </td>
                    <td>: {contactDetail.creditLimit}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>SDI</h6>
                    </td>
                    <td>: {contactDetail.sdiCode}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>startDate</h6>
                    </td>
                    <td>: {new Date(contactDetail.startDate).getFullYear() + "/" + (new Date(contactDetail.startDate).getMonth() + 1) + "/" + new Date(contactDetail.startDate).getFullYear()}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>invoiceCode</h6>
                    </td>
                    <td>: {contactDetail.invoiceCode}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>website</h6>
                    </td>
                    <td>: {contactDetail.website}</td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Button
                        color="primary"
                        onClick={() => { const remoteId = contactDetail['@id'] ? contactDetail['@id'] : contactDetail.remoteId; setContactDetailEdit({...contactDetail, id: contactContent, remoteId: remoteId}); dispatch(isEdit()) }}
                      >
                        Edit Contact
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <>
                {/***********Contact form box**************/}
                <table className="table table-borderless align-middle">
                  <tbody>
                    <tr>
                      <td width="150">
                        <h6>companyName </h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="companyName"
                          id="companyName"
                          value={contactDetailEdit.companyName}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, companyName: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>address</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="address"
                          id="address"
                          value={contactDetailEdit.address}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, address: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Partita Iva</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="vatNumber"
                          id="vatNumber"
                          value={contactDetailEdit.vatNumber}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, vatNumber: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>taxCode</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="taxCode"
                          id="taxCode"
                          value={contactDetailEdit.taxCode}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, taxCode: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Email</h6>
                      </td>
                      <td>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={contactDetailEdit.email}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, email: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>phoneNumber</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          value={contactDetailEdit.phoneNumber}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, phoneNumber: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>contactName</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="contactName"
                          id="contactName"
                          value={contactDetailEdit.contactName}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, contactName: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>contactPhone</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="contactPhone"
                          id="contactPhone"
                          value={contactDetailEdit.contactPhone}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, contactPhone: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>contactEmail</h6>
                      </td>
                      <td>
                        <Input
                          type="email"
                          name="contactEmail"
                          id="contactEmail"
                          value={contactDetailEdit.contactEmail}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, contactEmail: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>clientCode</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="clientCode"
                          id="clientCode"
                          value={contactDetailEdit.clientCode}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, clientCode: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>startDate</h6>
                      </td>
                      <td>
                        <Input
                          type="date"
                          name="startDate"
                          id="startDate"
                          value={contactDetailEdit.startDate}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, startDate: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>dossier</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="dossier"
                          id="dossier"
                          value={contactDetailEdit.dossier}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, dossier: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>creditLimit</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="creditLimit"
                          id="creditLimit"
                          value={contactDetailEdit.creditLimit}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, creditLimit: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>SDI</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="sdiCode"
                          id="sdiCode"
                          value={contactDetailEdit.sdiCode}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, sdiCode: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>invoiceCode</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="invoiceCode"
                          id="invoiceCode"
                          value={contactDetailEdit.invoiceCode}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, invoiceCode: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>website</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="website"
                          id="website"
                          value={contactDetailEdit.website}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, website: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Note</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="note"
                          id="note"
                          value={contactDetailEdit.note}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, note: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <Button
                          color="success"
                          onClick={() => { dispatch(UpdateContact(contactDetailEdit)); dispatch(isEdit())}}
                        >
                          Save Contact
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      ) : (
        "Please Select The contact"
      )}
    </>
  );
};

export default ContactDetails;
