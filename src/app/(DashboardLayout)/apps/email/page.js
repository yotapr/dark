"use client";
import { Card, CardBody } from "reactstrap";
import ThreeColumn from "@/app/(DashboardLayout)/components/threeColumn/ThreeColumn";
import EmailList from "@/app/(DashboardLayout)/components/apps/email/EmailList";
import EmailFilter from "@/app/(DashboardLayout)/components/apps/email/EmailFilter";
import EmailSearch from "@/app/(DashboardLayout)/components/apps/email/EmailSearch";
import EmailDetails from "@/app/(DashboardLayout)/components/apps/email/EmailDetails";

const Email = () => {
  return (
    <Card>
      <CardBody>
        <ThreeColumn
          leftContent={<EmailFilter />}
          middleContent={
            <>
              <EmailSearch />
              <EmailList />
            </>
          }
          rightContent={<EmailDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Email;
