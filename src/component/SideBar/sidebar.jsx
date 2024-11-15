import React from "react";
import Logo from "../../assets/abs1.png";


import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function SideBar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="flex z-50 sticky top-0">
      <IconButton variant="text" size="lg" onClick={openDrawer} className="">
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 text-[#2b7840] border-2 border-black" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 text-[#2b7840] border-2  border-black" />
        )}
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        className="shadow-2xl shadow-blue-gray-700 "
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4 relative"
        >
          <div className="">
          <Link to='/' className="mb-2 flex items-center gap-4 p-4">
            <img src={Logo} alt="brand" className="h-10" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold"
            >
              
              
              Weep Wood
              
            </Typography>
            </Link>
          </div>
          <hr className="" />
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3 hover:bg-gray-100"
                >
                  {/* <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Our Product
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem className="hover:bg-gray-100">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/">Analytics</Link>
                  </ListItem>
                  <ListItem className="hover:bg-gray-100">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/reporting">Reporting</Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <ListItem className="hover:bg-gray-100">
              <Typography color="blue-gray" className="mr-auto font-normal">
                <Link to="/portfolio">Portfolio</Link>
              </Typography>
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <Typography color="blue-gray" className="mr-auto font-normal">
                <Link to="/downloads">Downloads</Link>
              </Typography>
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <Typography color="blue-gray" className="mr-auto font-normal">
                <Link to="/portfolio">Blogs</Link>
              </Typography>
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <Typography color="blue-gray" className="mr-auto font-normal">
                <Link to="/contact-us">Contact Us</Link>
              </Typography>
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <Typography color="blue-gray" className="mr-auto font-normal">
                <Link to="/about-us">About Us</Link>
              </Typography>
            </ListItem>
            {/* <hr className="my-2 border-blue-gray-50" />
            <ListItem className="hover:bg-gray-100">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Logout
            </ListItem> */}
          </List>
        </Card>
      </Drawer>
    </div>
  );
}

export default SideBar;
