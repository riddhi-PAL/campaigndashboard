import React from 'react' 
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material"; 
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

const items = [
  {
    label: "Profile",
    key: "3",
  },
  {
    label: "Setting",
    key: "3",
  },
  {
    label: "Logout",
    key: "3",
  },
];
const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <div style={{display:'flex', padding:'15%'}}>
      <Dropdown
        open={anchorEl}
        menu={{
          items,
        }}
        trigger={["click"]}
        onClick={handleClick}
      >
        <Avatar alt="Remy Sharp" style={{marginTop:' 5px'}} src='/profile.png'  />
      </Dropdown>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DownOutlined style={{ width:'16px' }}/>
      </IconButton>
    </div>
  );
};

export default ProfileMenu;