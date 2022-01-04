import React, { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
};

export default Contact;
