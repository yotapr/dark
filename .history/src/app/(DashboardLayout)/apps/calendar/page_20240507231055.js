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
import { fetchAppointments } from "@/store/apps/appointments/AppointmentSlice";

moment.locale("it");
const localizer = momentLocalizer(moment);

const CalendarApp = () => {
  const [calevents, setCalEvents] = useState(EventData);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [slot, setSlot] = useState();
  const [color, setColor] = useState("default");
  const [update, setUpdate] = useState();
  
  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.appointmentReducer.appointments);

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
  };
  const editEvent = (event) => {
    setOpen(true);
    const newEditEvent = calevents.find((elem) => elem.title === event.title);
    setColor(event.color);
    setTitle(newEditEvent.title);
    setColor(newEditEvent.color);
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

  const selectinputChangeHandler = (id) => setColor(id);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvents = calevents;
    newEvents.push({
      title,
      start: slot.start,
      end: slot.end,
      color,
    });
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
  }, [dispatch]);

  useEffect(() => {
    appointments.map((appointment) => console.log(appointment))
  }, [appointments]);

  console.log(appointments)
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
                <h6>Event Title</h6>
                <Input
                  id="Event Title"
                  placeholder="Enter Event Title"
                  value={title}
                  onChange={inputChangeHandler}
                />
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
