import React, { Fragment } from "react";
import { Button, Image, Input } from "../components/index"
import { Auth } from "../modules/auth/Auth";
import { Dashboard } from "../modules/mask/dashboard/Dashboard";
import { Store } from "../modules/mask/store/Store";


function Page() {
  return (
    <Fragment>
      {/* <Auth /> */}
      {/* <Dashboard /> */}
      <Store />
    </Fragment>
  );
}

export default Page;
