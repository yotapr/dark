"use client";
import { Card, CardBody } from "reactstrap";
import ContactList from "@/app/(DashboardLayout)/components/apps/contact/ContactList";
import ContactSearch from "@/app/(DashboardLayout)/components/apps/contact/ContactSerch";
import ContactDetails from "@/app/(DashboardLayout)/components/apps/contact/ContactDetails";
import TwoColumn from "@/app/(DashboardLayout)/components/twoColumn/TwoColumn";
import ContactFilter from "@/app/(DashboardLayout)/components/apps/contact/ContactFilter";

const Contacts = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          leftContent={<>
              <ContactList />
            </>}
          middleContent={
            <ContactFilter />
          }
          rightContent={<ContactDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Contacts;
