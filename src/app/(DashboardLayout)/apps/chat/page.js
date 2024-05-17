"use client";
import { Card, CardBody } from "reactstrap";
import ChatList from "@/app/(DashboardLayout)/components/apps/chat/ChatList";
import ChatSearch from "@/app/(DashboardLayout)/components/apps/chat/ChatSearch";
import ChatContent from "@/app/(DashboardLayout)/components/apps/chat/ChatContent";
import ChatMsgForm from "@/app/(DashboardLayout)/components/apps/chat/ChatMsgForm";
import TwoColumn from "@/app/(DashboardLayout)/components/twoColumn/TwoColumn";

const Chat = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          leftContent={
            <>
              <ChatSearch />
              <ChatList />
            </>
          }
          rightContent={
            <>
              <ChatContent />
              <ChatMsgForm />
            </>
          }
        />
      </CardBody>
    </Card>
  );
};

export default Chat;
