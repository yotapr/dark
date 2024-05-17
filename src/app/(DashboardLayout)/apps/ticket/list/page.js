"use client";
import { Card, CardBody } from "reactstrap";
import TicketListing from "@/app/(DashboardLayout)/components/apps/ticket/TicketListing";
import TicketFilter from "@/app/(DashboardLayout)/components/apps/ticket/TicketFilter";

const TicketList = () => {
  return (
    <Card>
      <CardBody>
        <TicketFilter />
        <TicketListing />
      </CardBody>
    </Card>
  );
};

export default TicketList;
