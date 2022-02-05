import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

function FormContainer(props){
    const postUrl="https://gmail.us5.list-manage.com/subscribe/post?u=17aeae8a4b9c80594bb6a6cec&amp;id=f6e0a77914";
    return (
        <div className="mc__form-container" style={{height:"100vh"}}>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
}

export default FormContainer;