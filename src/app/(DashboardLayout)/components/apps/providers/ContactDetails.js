"use client"
import React from "react";
import { useDispatch, useSelector } from "@/store/hooks";
import { Button, Input } from "reactstrap";
import Image from "next/image";
import {
  isEdit,
  UpdateContact,
} from "@/store/apps/providers/ProviderSlice";

const ContactDetails = () => {
  
  const contactDetail = useSelector( (state) => state.contactsReducer.contacts[state.contactsReducer.contactContent])

  const [contactDetailEdit, setContactDetailEdit]  = React.useState({})

  const contactContent = useSelector((state) => state.contactsReducer.contactContent);

  const editContact = useSelector((state) => state.contactsReducer.editContact);
  
  const [editDate,setEditDate] = React.useState(false)

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
                      <h6>Azienda </h6>
                    </td>
                    <td>: {contactDetail.companyName}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Indirizzo</h6>
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
                      <h6>Email</h6>
                    </td>
                    <td>: {contactDetail.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Telefono</h6>
                    </td>
                    <td>: {contactDetail.phone}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Nome contatto</h6>
                    </td>
                    <td>: {contactDetail.contactName}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Telefono contatto</h6>
                    </td>
                    <td>: {contactDetail.contactPhone}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Email contatto</h6>
                    </td>
                    <td>: {contactDetail.contactEmail}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Website</h6>
                    </td>
                    <td>: {contactDetail.website}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Codice fornitore</h6>
                    </td>
                    <td>: {contactDetail.providerCode}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Limite credito</h6>
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
                      <h6>Data inizio</h6>
                    </td>
                    <td>: {new Date(contactDetail.startDate).getDate() + "/" + (new Date(contactDetail.startDate).getMonth() + 1) + "/" + new Date(contactDetail.startDate).getFullYear()}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Metodo di pagamento</h6>
                    </td>
                    <td>: {contactDetail.paymentMethod}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Codice fattura</h6>
                    </td>
                    <td>: {contactDetail.invoiceCode}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Website</h6>
                    </td>
                    <td>: {contactDetail.website}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Note</h6>
                    </td>
                    <td>: {contactDetail.note}</td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Button
                        color="primary"
                        onClick={() => { const remoteId = contactDetail['@id'] ? contactDetail['@id'] : contactDetail.remoteId; setContactDetailEdit({...contactDetail, id: contactContent, remoteId: remoteId}); dispatch(isEdit()) }}
                      >
                        Modifica Fornitore
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
                        <h6>Azienda </h6>
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
                        <h6>Indirizzo</h6>
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
                        <h6>Telefono</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          value={contactDetailEdit.phone}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, phone: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Nome contatto</h6>
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
                        <h6>Telefono contatto</h6>
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
                        <h6>Email contatto</h6>
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
                        <h6>Codice fornitore</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="providerCode"
                          id="providerCode"
                          value={contactDetailEdit.providerCode}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, providerCode: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Data inizio</h6>
                      </td>
                      <td>
                        <Input
                          type="date"
                          name="startDate"
                          id="startDate"
                          value={editDate === true ? contactDetailEdit.startDate : new Date(contactDetail.startDate).getFullYear() + "-" + (new Date(contactDetail.startDate).getMonth() + 1 < 10 ? "0" : "") + (new Date(contactDetail.startDate).getMonth() + 1) + "-" + new Date(contactDetail.startDate).getDate()
                          }
                          onChange={(e) => { setEditDate(true); setContactDetailEdit({...contactDetailEdit, startDate: e.target.value})}}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Metodo pagamento</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="paymentMethod"
                          id="paymentMethod"
                          value={contactDetailEdit.paymentMethod}
                          onChange={(e) => setContactDetailEdit({...contactDetailEdit, paymentMethod: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Limite credito</h6>
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
                        <h6>Codice fatturazione</h6>
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
                        <h6>Website</h6>
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
                          onClick={() => { setEditDate(false); dispatch(UpdateContact(contactDetailEdit)); dispatch(isEdit())}}
                        >
                          Salva Contatto
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
        "Seleziona il contatto"
      )}
    </>
  );
};

export default ContactDetails;
