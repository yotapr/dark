"use client";
import { Card, CardBody } from "reactstrap";
import ContactList from "@/app/(DashboardLayout)/components/apps/contact/ContactList";
import ContactSearch from "@/app/(DashboardLayout)/components/apps/contact/ContactSerch";
import ContactDetails from "@/app/(DashboardLayout)/components/apps/contact/ContactDetails";
import ThreeColumn from "@/app/(DashboardLayout)/components/threeColumn/ThreeColumn";
import ContactFilter from "@/app/(DashboardLayout)/components/apps/contact/ContactFilter";

const Contacts = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          leftContent={<ContactFilter />}
          middleContent={
            <>
              <ContactSearch />
              <ContactList />
            </>
          }
          rightContent={<ContactDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Contacts;
