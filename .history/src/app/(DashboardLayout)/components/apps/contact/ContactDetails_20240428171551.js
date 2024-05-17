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
  
  const [contactDetail, setContactDetail] = React.useState(useSelector(
    (state) =>
      state.contactsReducer.contacts[state.contactsReducer.contactContent]
  ));

  const editContact = useSelector((state) => state.contactsReducer.editContact);
  const dispatch = useDispatch();
  //payload.id,payload.companyName,payload.address,payload.image,payload.taxCode,payload.vatNumber,payload.phoneNumber,payload.email,payload.contactName,payload.contactPhone,payload.contactEmail,payload.clientCode,payload.startDate,payload.dossier,payload.creditLimit,payload.sdiCode,payload.invoiceCode,payload.website,payload.note
  return (
    <>
      {contactContent}
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
                    <td>: {contactDetail.startDate}</td>
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
                        onClick={() => dispatch(isEdit())}
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
                          value={contactDetail.companyName}
                          onChange={(e) => setContactDetail({...contactDetail, companyName: e.target.value})}
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
                          value={contactDetail.address}
                          onChange={(e) => setContactDetail({...contactDetail, address: e.target.value})}
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
                          value={contactDetail.vatNumber}
                          onChange={(e) => setContactDetail({...contactDetail, vatNumber: e.target.value})}
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
                          value={contactDetail.taxCode}
                          onChange={(e) => setContactDetail({...contactDetail, taxCode: e.target.value})}
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
                          value={contactDetail.email}
                          onChange={(e) => setContactDetail({...contactDetail, email: e.target.value})}
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
                          value={contactDetail.phoneNumber}
                          onChange={(e) => setContactDetail({...contactDetail, phoneNumber: e.target.value})}
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
                          value={contactDetail.contactName}
                          onChange={(e) => setContactDetail({...contactDetail, contactName: e.target.value})}
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
                          value={contactDetail.contactPhone}
                          onChange={(e) => setContactDetail({...contactDetail, contactPhone: e.target.value})}
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
                          value={contactDetail.contactEmail}
                          onChange={(e) => setContactDetail({...contactDetail, contactEmail: e.target.value})}
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
                          value={contactDetail.clientCode}
                          onChange={(e) => setContactDetail({...contactDetail, clientCode: e.target.value})}
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
                          value={contactDetail.startDate}
                          onChange={(e) => setContactDetail({...contactDetail, startDate: e.target.value})}
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
                          value={contactDetail.dossier}
                          onChange={(e) => setContactDetail({...contactDetail, dossier: e.target.value})}
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
                          value={contactDetail.creditLimit}
                          onChange={(e) => setContactDetail({...contactDetail, creditLimit: e.target.value})}
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
                          value={contactDetail.sdiCode}
                          onChange={(e) => setContactDetail({...contactDetail, sdiCode: e.target.value})}
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
                          value={contactDetail.invoiceCode}
                          onChange={(e) => setContactDetail({...contactDetail, invoiceCode: e.target.value})}
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
                          value={contactDetail.website}
                          onChange={(e) => setContactDetail({...contactDetail, website: e.target.value})}
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
                          value={contactDetail.note}
                          onChange={(e) => setContactDetail({...contactDetail, note: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <Button
                          color="success"
                          onClick={() => dispatch(isEdit())}
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
