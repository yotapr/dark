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
import EventData from "@/app/api/calendar/EventData";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "@/store/hooks";
import { fetchAppointments, addNewAppointment, fetchUsers } from "@/store/apps/appointments/AppointmentSlice";

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
  
  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.appointmentReducer.appointments);
  
  const users = useSelector((state) => state.appointmentReducer.users);

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
    const newEditEvent = calevents.find((elem) => elem.title === event.title);
    setColor(event.color);
    setTitle(newEditEvent.title);
    setColor(newEditEvent.color);
    console.log(newEditEvent)
    //setAppointmentStart(new Date(newEditEvent.appointmentStart).getFullYear() + "-" + (new Date(newEditEvent.appointmentStart).getMonth() < 9 ? "0" : "") + (new Date(newEditEvent.appointmentStart).getMonth() + 1) + "-" + (new Date(newEditEvent.appointmentStart).getDate() < 10 ? "0" : "") + new Date(newEditEvent.appointmentStart).getDate() + "T" + (new Date(newEditEvent.appointmentStart).getHours() < 10 ? "0" : "") + new Date(newEditEvent.appointmentStart).getHours() + ":" + (new Date(newEditEvent.appointmentStart).getMinutes() < 10 ? "0" : "") + new Date(newEditEvent.appointmentStart).getMinutes());
    //setAppointmentEnd(new Date(newEditEvent.appointmentEnd).getFullYear() + "-" + (new Date(newEditEvent.appointmentEnd).getMonth() < 9 ? "0" : "") + (new Date(newEditEvent.appointmentEnd).getMonth() + 1) + "-" + (new Date(newEditEvent.appointmentEnd).getDate() < 10 ? "0" : "") + new Date(newEditEvent.appointmentEnd).getDate() + "T" + (new Date(newEditEvent.appointmentEnd).getHours() < 10 ? "0" : "") + new Date(newEditEvent.appointmentEnd).getHours() + ":" + (new Date(newEditEvent.appointmentEnd).getMinutes() < 10 ? "0" : "") + new Date(newEditEvent.appointmentEnd).getMinutes());
    setUpdate(event);
  };
  const updateEvent = (e) => {
    e.preventDefault();

    setCalEvents(
      calevents.map((elem) => {
        if (elem.title === update.title) {
          return { ...elem, title, color };
        }
        return elem;
      })
    );
    setOpen(false);
    setTitle("");
    setColor("");
    setUpdate(null);
  };
  const inputChangeHandler = (e) => setTitle(e.target.value);

  const inputUserHandler = (e) => setUser(e.target.value);
  
  const inputStartHandler = (e) => setAppointmentStart(e.target.value);
  
  const inputEndHandler = (e) => setAppointmentEnd(e.target.value);

  const selectinputChangeHandler = (id) => setColor(id);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvents = calevents;
    newEvents.push({
      title,
      start: slot.start,
      end: slot.end,
      user: user,
      color,
    });
    
    dispatch(addNewAppointment({title: title, appointmentStart: appointmentStart, appointmentEnd: appointmentEnd, user: user}))
    
    setOpen(false);
    e.target.reset();
    
    setCalEvents(newEvents);
    setTitle("");
  };
  const deleteHandler = (event) => {
    const updatecalEvents = calevents.filter(
      (ind) => ind.title !== event.title
    );
    setCalEvents(updatecalEvents);
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
  }, [dispatch]);

  const fetchAppointmentsList = async () => {
    let appointmentsList = []
    await appointments.map((appointment) => appointmentsList.push({
      title: appointment.title,
      allDay: false,
      start: new Date(appointment.appointmentStart),
      end: new Date(appointment.appointmentEnd),
      color: 'primary'}))
    setCalEvents(appointmentsList)
  }
  
  useEffect(() => {
    fetchAppointmentsList()
  }, [appointments]);

  return (
    <>
      <Card>
        <CardBody>
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
          <Modal isOpen={open}>
            <ModalHeader toggle={handleClose}>
              {update ? "Update Event" : "Add Event"}
            </ModalHeader>
            <Form onSubmit={update ? updateEvent : submitHandler}>
              <ModalBody>
                <h6>Titolo dell'evento</h6>
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
                <option value="">Scegli l'utente...</option>
                {users.map((singleUser) => <option value={singleUser['@id']}>{singleUser.email}</option>)}
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
                    type="submit"
                    color="danger"
                    outline
                    onClick={() => deleteHandler(update)}
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
        </CardBody>
      </Card>
    </>
  );
};

export default CalendarApp;
