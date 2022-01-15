import React, { Fragment } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
const NavBar = () => {
  const year = 2022;
  return (
    <Fragment>
      <Link passHref href="/">
        <Button>Home</Button>
      </Link>
      <Link passHref href={`/events/${year}/location`}>
        <Button>Location</Button>
      </Link>
      <Link passHref href={`/events/${year}/speakers`}>
        <Button>Speakers</Button>
      </Link>
      <Link passHref href={`/events/${year}/schedule`}>
        <Button>Schedule</Button>
      </Link>
      <Link passHref href={`/events/${year}/partnership`}>
        <Button>Partnership</Button>
      </Link>
    </Fragment>
  );
};

export default NavBar;
