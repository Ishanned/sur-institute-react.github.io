import React, {useState} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function CustomForm({status, message, onValidated}){
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

        setFirstName('')
        setLastName('')
        setEmail('')
        alert("You have been successfully registered")
    }
    function handleFname(event){
        setFirstName(event.target.value)
    }
    function handleLname(event){
        setLastName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }


    return(<div style={{margin:"auto"}} className="row g-3 align-items-center col-md-6">
        <form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mb-3">Join us for future updates</h3>
        <div className="sm-6">
        <label for="f" class="form-label">First Name</label>
          <input
            label="First Name"
            className="form-control"
            onChange={handleFname}
            type="text"
            value={firstName}
            id="f"
            />
        </div>
        <div className="sm-6">
        <label for="l" class="form-label">Last Name</label>
          <input
            className="form-control"
            label="Last Name"
            onChange={handleLname}  
            type="text"
            value={lastName}
            id="l"
            
            
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            label="Email"
            className="form-control"
            onChange={handleEmail}
            type="email"
            value={email}
            id="exampleInputEmail1"
            
            
          />
        </div>
        

        <input
          label="subscribe"
          className="btn btn-dark"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      </form>
    </div>)

}

export default CustomForm;