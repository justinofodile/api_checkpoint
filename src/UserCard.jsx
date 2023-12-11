import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const UserCard = ({ user }) => (
  <Card
    style={{
      width: 400,
      border: "2px solid gray",
    }}
  >
    <Meta
      avatar={
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
      }
      title={user.name}
      description={user.email}
    />
    <div className="flex items-center gap-5 mt-5 justify-around">
      <Meta description={user.address.street} />
      <Meta description={user.address.suite} />
      <Meta description={user.address.city} />
    </div>
    <div className="flex items-center gap-5 mt-5 justify-around">
      <Meta description={user.phone} />
      <Meta description={"www." + user.website} />
    </div>

    <div className="mt-3 bg-gray-300 p-3">
      <Meta title="Company" description={user.company.name} />
      <div className="mt-2">
        <Meta description={user.company.catchPhrase} />
        {/* <Meta description={"www." + user.website} /> */}
      </div>
    </div>
  </Card>
);
export default UserCard;
