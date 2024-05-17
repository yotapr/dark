"use client"
import { Card, CardBody } from "reactstrap";
import NoteDetail from "@/app/(DashboardLayout)/components/apps/notes/NoteDetail";
import NoteList from "@/app/(DashboardLayout)/components/apps/notes/NoteList";
import NoteSearch from "@/app/(DashboardLayout)/components/apps/notes/NoteSearch";
import TwoColumn from "@/app/(DashboardLayout)/components/twoColumn/TwoColumn";

const Notes = () => {
  return (
    <>
      <Card>
        <CardBody>
          <TwoColumn
            leftContent={
              <>
                <NoteSearch />
                <NoteList />
              </>
            }
            rightContent={<NoteDetail />}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Notes;
