import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = data.hiring;
    console.log(formData)
    if (formData) {
      <div className="inline">
        <input className="input-form me-3" placeholder="Company Name" />
        <input className="input-form" placeholder="Your Title" />
        <input className="input-form" placeholder="Website" />
      </div>;
    }
  };

  return (
    <div id="form1">
      <Container>
        <h1 className="text-center mb-5">Let's Get Started</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inline">
            <input
              {...register("firstName")}
              className="input-form me-3"
              placeholder="First Name"
            />
            <input
              {...register("lastName")}
              className="input-form"
              placeholder="Last Name"
            />
          </div>
          <div className="inline">
            <input
              {...register("email")}
              className="input-form me-3"
              placeholder="Email"
            />
            <select {...register("hiring")} className="input-form">
              <option>Select One..</option>
              <option value="myself">I am Hiring For Myself</option>
              <option value="mycompany">I am Hiring For My Company</option>
            </select>
          </div>
          <label>Where did you hear about us?</label> <br />
          <select {...register("about")} className="input-form w-100">
            <option>Select One..</option>
            <option value="previousClient">A Previous Client</option>
            <option value="leapCourse">The Delegation Leap Course</option>
            <option value="nickHuber">Nick Huber / Sweaty Startup</option>
            <option value="sanchez">Codie Sanchez / Contrarain Thinking</option>
            <option value="barrett">Barrett O'Neill</option>
            <option value="barrett">Barrett O'Neill</option>
            <option value="nickGray">Nick Gray / nickgray.net</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">Linkedin</option>
            <option value="podcast">Podcast</option>
            <option value="google">Google</option>
            <option value="other">Other</option>
          </select>
          <br />
          <div className="inline">
            <div className="checkbox">
              <label htmlFor="assistant">
                <input type="checkbox" name="hiring_roles" id="assistant" />{" "}
                Assistant
              </label>{" "}
              <br />
              <label htmlFor="creative">
                <input type="checkbox" name="hiring_roles" id="creative" />{" "}
                Creative
              </label>{" "}
              <br />
              <label htmlFor="customer">
                <input type="checkbox" name="hiring_roles" id="customer" />{" "}
                Customer Support
              </label>{" "}
              <br />
              <label htmlFor="development">
                <input type="checkbox" name="hiring_roles" id="development" />{" "}
                Development
              </label>{" "}
              <br />
              <label htmlFor="finance">
                <input type="checkbox" name="hiring_roles" id="finance" />{" "}
                Finance
              </label>{" "}
              <br />
              <label htmlFor="operations">
                <input type="checkbox" name="hiring_roles" id="operations" />{" "}
                Operations
              </label>{" "}
              <br />
              <label htmlFor="sales">
                <input type="checkbox" name="hiring_roles" id="sales" /> Sales
              </label>{" "}
              <br />
              <label htmlFor="other">
                <input type="checkbox" name="hiring_roles" id="other" /> Other
              </label>{" "}
              <br />
            </div>
            <select {...register("salary")} className="input-form">
              <option value="700-1000">$700-$1,000</option>
              <option value="1000-1500">$1,000-$1,500</option>
              <option value="1500-2500">$1,500-$2,500</option>
              <option value="2500">$2,500+</option>
            </select>
          </div>
          <br />
          <div className="inline">
            <select {...register("hiredGlobally")} className="input-form me-5">
              <option>Select One..</option>
              <option value="yes">Yes, I have hired globally before </option>
              <option value="no">No, this is my first global hire</option>
            </select>
            <br />
            <select {...register("nextSteps")} className="input-form">
              <option>Select One..</option>
              <option value="phone">
                I'd like to talk to someone over the phone
              </option>
              <option value="agreement">
                I'm ready to get started, send me the agreement
              </option>
            </select>
          </div>
          <br />
          <textarea
            {...register("job-description")}
            className="input-form w-100 text-area"
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <Button variant="success" className="w-100 mb-4" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
