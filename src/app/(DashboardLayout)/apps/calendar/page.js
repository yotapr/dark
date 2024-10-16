"use client";
import React, { useState,useEffect } from "react";
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form, 
} from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/it';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "@/store/hooks";
import { fetchAppointments, addNewAppointment, fetchCalendars, fetchUsers, editAppointment, removeAppointment, searchCalendars } from "@/store/apps/appointments/AppointmentSlice";

moment.locale("it");
const localizer = momentLocalizer(moment);

const CalendarApp = () => {
  const [calevents, setCalEvents] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [appointmentEnd, setAppointmentEnd] = useState("");
  const [appointmentStart, setAppointmentStart] = useState("");
  const [slot, setSlot] = useState();
  const [color, setColor] = useState("default");
  const [update, setUpdate] = useState();
  const [user, setUser] = useState("");
  const [calendar, setCalendar] = useState("");
  const [id, setId] = useState("");
  const [modalDelete, setModalDelete] = useState("");
  
  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.appointmentReducer.appointments);
  
  const users = useSelector((state) => state.appointmentReducer.users);

  const calendars = useSelector((state) => state.appointmentReducer.calendars);

  const ColorVariation = [
    {
      id: 1,
      eColor: "#1a97f5",
      value: "primary",
    },
    {
      id: 2,
      eColor: "#00ab55",
      value: "success",
    },
    {
      id: 3,
      eColor: "#fc4b6c",
      value: "danger",
    },
    {
      id: 4,
      eColor: "#1e4db7",
      value: "info",
    },
    {
      id: 5,
      eColor: "#fdd43f",
      value: "warning",
    },
  ];
  const addNewEventAlert = (slotInfo) => {
    setOpen(true);
    setSlot(slotInfo);
    setAppointmentStart(new Date(slotInfo.start).getFullYear() + "-" + (new Date(slotInfo.start).getMonth() < 9 ? "0" : "") + (new Date(slotInfo.start).getMonth() + 1) + "-" + (new Date(slotInfo.start).getDate() < 10 ? "0" : "") + new Date(slotInfo.start).getDate() + "T" + (new Date(slotInfo.start).getHours() < 10 ? "0" : "") + new Date(slotInfo.start).getHours() + ":" + (new Date(slotInfo.start).getMinutes() < 10 ? "0" : "") + new Date(slotInfo.start).getMinutes());
    setAppointmentEnd(new Date(slotInfo.end).getFullYear() + "-" + (new Date(slotInfo.end).getMonth() < 9 ? "0" : "") + (new Date(slotInfo.end).getMonth() + 1) + "-" + (new Date(slotInfo.end).getDate() < 10 ? "0" : "") + new Date(slotInfo.end).getDate() + "T" + (new Date(slotInfo.end).getHours() < 10 ? "0" : "") + new Date(slotInfo.end).getHours() + ":" + (new Date(slotInfo.end).getMinutes() < 10 ? "0" : "") + new Date(slotInfo.end).getMinutes());
  };
  const editEvent = (event) => {
    setOpen(true);
    setTitle(event.title);
    setColor(event.color);
    setUser(event.user);
    setId(event.id);
    setAppointmentStart(new Date(event.start).getFullYear() + "-" + (new Date(event.start).getMonth() < 9 ? "0" : "") + (new Date(event.start).getMonth() + 1) + "-" + (new Date(event.start).getDate() < 10 ? "0" : "") + new Date(event.start).getDate() + "T" + (new Date(event.start).getHours() < 10 ? "0" : "") + new Date(event.start).getHours() + ":" + (new Date(event.start).getMinutes() < 10 ? "0" : "") + new Date(event.start).getMinutes());
    setAppointmentEnd(new Date(event.end).getFullYear() + "-" + (new Date(event.end).getMonth() < 9 ? "0" : "") + (new Date(event.end).getMonth() + 1) + "-" + (new Date(event.end).getDate() < 10 ? "0" : "") + new Date(event.end).getDate() + "T" + (new Date(event.end).getHours() < 10 ? "0" : "") + new Date(event.end).getHours() + ":" + (new Date(event.end).getMinutes() < 10 ? "0" : "") + new Date(event.end).getMinutes());
    setUpdate(event);
  };
  const updateEvent = async (e) => {
    e.preventDefault();
    setCalEvents(
      calevents.map((elem) => {
        if (elem.id === update.id) {
          return { ...elem, title, color, start: appointmentStart, end: appointmentEnd, user };
        }
        return elem;
      })
    );
    dispatch(editAppointment({title: title, color: color, appointmentStart: appointmentStart, appointmentEnd: appointmentEnd, id: update.id, user: user}))
    setOpen(false);
    setAppointmentStart("");
    setAppointmentEnd("");
    setTitle("");
    setColor("");
    setUpdate(null);
  };
  const inputChangeHandler = (e) => setTitle(e.target.value);

  const inputUserHandler = (e) => setUser(e.target.value);

  const inputCalendarHandler = (e) => setCalendar(e.target.value);
  
  const inputStartHandler = (e) => setAppointmentStart(e.target.value);
  
  const inputEndHandler = (e) => setAppointmentEnd(e.target.value);

  const selectinputChangeHandler = (id) => setColor(id);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvents = calevents;
    newEvents.push({
      title: title,
      start: slot.start,
      end: slot.end,
      user: user,
      color: color,
      calendar: calendar
    });
    
    dispatch(addNewAppointment({title: title, appointmentStart: appointmentStart, appointmentEnd: appointmentEnd, user: user, color: color, calendar: calendar}))
    
    setOpen(false);
    e.target.reset();
    
    setCalEvents(newEvents);
    setAppointmentStart("");
    setAppointmentEnd("");
    setTitle("");
    setColor("");
  };
  const deleteHandler = (event) => {
    const updatecalEvents = calevents.filter(
      (ind) => ind.id !== event.id
    );
    dispatch(removeAppointment(event))
    setCalEvents(updatecalEvents);
    setOpen(false)
  };
  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setUpdate(null);
  };

  const eventColors = (event) => {
    if (event.color) {
      return { className: `event-${event.color}` };
    }
    return { className: `event-default` };
  };
  
  useEffect(() => {
    dispatch(fetchAppointments())
    dispatch(fetchUsers())
    dispatch(fetchCalendars())
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchCalendars(calendar))
  }, [calendar]);
  
  useEffect(() => {
    setCalEvents(appointments)
  }, [appointments]);

  const fetchAppointmentsList = async () => {
    let appointmentsList = []
    await appointments.map((appointment) => appointmentsList.push({
      title: appointment.title,
      allDay: false,
      start: new Date(appointment.appointmentStart),
      end: new Date(appointment.appointmentEnd),
      color: appointment.color,
      user: appointment.user,
      id: appointment['@id']
    }))
    setCalEvents(appointmentsList)
  }
  
  useEffect(() => {
    fetchAppointmentsList()
  }, [appointments]);

  return (
    <>
      <Modal isOpen={modalDelete} toggle={() => setModalDelete(!modalDelete)}>
        <ModalHeader toggle={() => setModalDelete(!modalDelete)}>Confermi di voler cancellare?</ModalHeader>
        <ModalBody>
          <Button style={{margin: "5px"}} color="danger" onClick={() => { deleteHandler(update);  setModalDelete(!modalDelete)}}>       Rimuovi
          </Button>
          <Button
            color="secondary"
            className="ml-1"
            onClick={() => setModalDelete(!modalDelete)}
          >
            Annulla
          </Button>
        </ModalBody>
      </Modal>
          <Modal isOpen={open}>
            <ModalHeader toggle={handleClose}>
              {update ? "Update Event" : "Add Event"}
            </ModalHeader>
            <Form onSubmit={update ? updateEvent : submitHandler}>
              <ModalBody>
                <h6>Titolo dell&#39;evento</h6>
                <Input
                  id="title"
                  placeholder="Inserisci titolo"
                  value={title}
                  onChange={inputChangeHandler}
                />
                <br />
                <h6>Data di inizio</h6>
                <Input
                  type="datetime-local"
                  value={appointmentStart}
                  onChange={inputStartHandler}
                />
                <br />
                <h6>Data di fine</h6>
                <Input
                  type="datetime-local"
                  value={appointmentEnd}
                  onChange={inputEndHandler}
                />
                <br />
                <h6>Utente</h6>
                <Input
                  type="select"
                  onChange={inputUserHandler}
                >
                <option value="">Scegli l&#39;utente...</option>
                {users.map((singleUser) => { if (singleUser['@id'] === user) return (<option key={singleUser['@id']} selected value={singleUser['@id']}>{singleUser.email}</option>); else return (<option key={singleUser['@id']} value={singleUser['@id']}>{singleUser.email}</option>)})}
                </Input>
                <br />
                <h6>Select Event Color</h6>
                <div className="button-group">
                  {ColorVariation.map((colorbg) => (
                    <Button
                      color={colorbg.value}
                      key={colorbg.eColor}
                      size="sm"
                      onClick={() => selectinputChangeHandler(colorbg.value)}
                    >
                      {colorbg.value === color ? (
                        <i className="bi bi-check" />
                      ) : (
                        <i className="bi bi-circle" />
                      )}
                    </Button>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                {update ? (
                  <Button
                    type="button"
                    color="danger"
                    outline
                    onClick={() => setModalDelete(true)}
                  >
                    Delete
                  </Button>
                ) : (
                  ""
                )}
                <Button type="submit" color="success" disabled={!title}>
                  {update ? "Update" : "Add"}
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
      <Card>
        <CardBody>
          <br />
          <h6>Calendari</h6>
          <Input
            type="select"
            onChange={inputCalendarHandler}
          >
            <option value="">Scegli il calendario...</option>
            {calendars.map((singleCalendar) => { if (singleCalendar['@id'] === calendar) return (<option key={singleCalendar['@id']} selected value={singleCalendar['@id']}>{singleCalendar.name}</option>);
              else return (<option key={singleCalendar['@id']} value={singleCalendar['@id']}>{singleCalendar.name}</option>)})}
          </Input>
          <br />
          <Calendar
            selectable
            events={calevents}
            defaultView="month"
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            localizer={localizer}
            style={{ height: "calc(100vh - 350px" }}
            onSelectEvent={(event) => editEvent(event)}
            onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
            eventPropGetter={(event) => eventColors(event)}
            messages={{
              next: "prossimo",
              previous: "precedente",
              today: "Oggi",
              month: "Mese",
              week: "Settimana",
              day: "Giorno"
            }}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default CalendarApp;
