import { Form } from "@/app/(home)/Form";
import { Divider } from "@/app/_components/Divider";
import { Mv } from "@/app/_components/Mv";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Mv />
      <Divider />
      <Form />
    </Fragment>
  );
}
