import "./App.css";
import { useState } from "react";

function App() {

  const[formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",streetaddress:"",
    city:"",state:"",state:"",postalcode:"",comments:false,candidate:false,
    offers:false,pushNotification:""
  })

  function changeHandler(event) {
          const {name, value, checked, type} = event.target;
          setFormData( (prev) => ({...prev, [name]:type ==="checked" ? checked: value }))
  }

  function submitHandler(event) {
       event.preventDefault();

       console.log("finally printing");
       console.log(formData)
  }


  return (
      <div className="flex flex-col items-center mt-2 ">
        <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name</label>
        <br/>
          <input
          type="text"
          name = "firstName"
          id="firstName"
          placeholder="enter first name"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
          />
          <br/>

         <label htmlFor="lastName">Last Name</label>
        <br/>
          <input
          type="text"
          name = "lastName"
          id="lasttName"
          placeholder="enter last name"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
          />

          <br/>
        <label htmlFor="email">Email</label>
        <br/>
          <input
          type="text"
          name = "email"
          id="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
          />

          <br/>
          <label htmlFor="country">Country</label>
          <br/>
          <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
          >

            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>

          </select>

          <br/>

         <label htmlFor="streetaddress">Street Address</label>
        <br/>
          <input
          type="text"
          name = "streetaddress"
          id="streetaddress"
          placeholder="enter  streetaddress"
          value={formData.streetaddress}
          onChange={changeHandler}
          className="outline"
          />

          <br/>

           <label htmlFor="city">City</label>
            <br/>
             <input
              type="text"
              name = "city"
              id="city"
              placeholder="enter city"
              value={formData.city}
              onChange={changeHandler}
              className="outline"
               />

               <br/>

               <label htmlFor="state">State</label>
                <br/>
               <input
               type="text"
               name = "state"
               id="state"
                placeholder="enter state"
                value={formData.state}
               onChange={changeHandler}
              className="outline"
                />

                <br/>

                 <label htmlFor="postalcode">Postal Code</label>
                <br/>
                <input
                 type="text"
                 name = "postalcode"
                  id="postalcode"
                  placeholder="enter Postalcode"
                  value={formData.postalcode}
                  onChange={changeHandler}
                   className="outline"
                  />

                  <br/>
                  <br/>

                  <fieldset>
                     <legend>By email</legend>
                     <div className="flex">
                     <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      checked={formData.comments}
                      onChange={changeHandler}
                     />
                     <div>
                      <label htmlFor="comments">Comments</label>
                      <p>Get notified when someones post a comment on a posting.</p>
                     </div>
                     </div>

                     <div className="flex">
                     <input
                      id="candidate"
                      name="candidate"
                      type="checkbox"
                      checked={formData.candidate}
                      onChange={changeHandler}
                     />
                     <div>
                      <label htmlFor="candidate">Candidate</label>
                      <p>Get notified when someones post a comment on a posting</p>
                     </div>
                     </div>

                     <div className="flex">
                     <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      checked={formData.offers}
                      onChange={changeHandler}
                     />
                     <div>
                      <label htmlFor="offers">Offers</label>
                      <p>Get notified when a candidate accept or reject an offer.</p>
                     </div>
                     </div>
                     

                  </fieldset>
                  <br/>
                  <br/>

                  <fieldset>
                       <legend>Push Notifications</legend>
                       <p>These are delivered via SMS to your mobile phone</p>

                       <input
                        type="radio"
                        id="pushEverthing"
                        name="pushNotification"
                        value="Everthing"
                        onChange={changeHandler}
                       />
                      <label htmlFor="pushEverthing">Everthing</label>
                      <br/>

                      <input
                        type="radio"
                        id="pushEmail"
                        name="pushNotification"
                        value="same as email"
                        onChange={changeHandler}
                       />
                      <label htmlFor="pushEmail">Same as Email</label>
                      <br/>

                      <input
                        type="radio"
                        id="pushNothing"
                        name="pushNotification"
                        value="no push notification"
                        onChange={changeHandler}
                       />
                      <label htmlFor="pushNothing">No push Notification</label>

                       
                  </fieldset>


                  <button className="bg-blue-500 text-white rounded py-2 px-4 font-bold"
                  > Save </button>

        </form>
      </div>
  );
}

export default App;
