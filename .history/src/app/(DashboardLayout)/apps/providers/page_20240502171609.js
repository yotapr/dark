"use client";
import { Card, CardBody } from "reactstrap";
import ContactList from "@/app/(DashboardLayout)/components/apps/providers/ContactList";
import ContactDetails from "@/app/(DashboardLayout)/components/apps/providers/ContactDetails";
import TwoColumn from "@/app/(DashboardLayout)/components/twoColumn/TwoColumn";

const Contacts = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          leftContent={<>
              <ContactList />
            </>}
          rightContent={<ContactDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Contacts;
