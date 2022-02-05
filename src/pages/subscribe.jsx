import React from "react";
import Header from "../components/Header";
import FormContainer from "../components/FormContainer";

import MailchimpSubscribe from "react-mailchimp-subscribe"
import Footer from "../components/Footer";

function subscribe(){
    return(<div>
    <Header/>
    <FormContainer/>
    <Footer/>

    </div>)
}

export default subscribe;