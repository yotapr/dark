"use client";
import { Card, CardBody } from "reactstrap";
import ContactList from "@/app/(DashboardLayout)/components/apps/contact/ContactList";
import ContactSearch from "@/app/(DashboardLayout)/components/apps/contact/ContactSerch";
import ContactDetails from "@/app/(DashboardLayout)/components/apps/contact/ContactDetails";
import TwoColumn from "@/app/(DashboardLayout)/components/twoColumn/TwoColumn";

const Contacts = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          leftContent={<>
              <ContactSearch />
              <ContactList />
            </>}
          rightContent={<ContactDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Contacts;
