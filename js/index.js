// this function is used to create a staus of Contact form submission
// sets status to success or error
function Create_Contact_Message_Status(message, type) {
  // gets the parent element of the status box
  const contact_message_status = document.getElementById(
    "contact_message_status"
  );
  // get the i to set the respective icon
  const contact_message_status_icon = document.getElementById(
    "contact_message_status_icon"
  );
  // get the message are to set the message
  const contact_message_status_message = document.getElementById(
    "contact_message_status_message"
  );
  // since the message is not conditional we can set message directly
  contact_message_status_message.innerText = message;

  // using type to set the statues to either Success || Error
  if (type == "Success") {
    contact_message_status.classList.add("bg-green-200");
    contact_message_status_icon.classList.add("fa-check-circle");
  } else if (type == "Error") {
    contact_message_status.classList.add("bg-red-200");
    contact_message_status_icon.classList.add("fa-info-circle");
  }
  // used to display the status finally
  contact_message_status.style.display = "block";
}

// this fuction gets the details filled in the contact form
function Fetch_Contact_Form_Details() {
  const contactor_name = document.getElementById("name").value;
  const contactor_email = document.getElementById("email").value;
  const contactor_message = document.getElementById("message").value;

  // console.log({ contactor_name, contactor_email, contactor_message });

  if (
    contactor_email === "" ||
    contactor_name === "" ||
    contactor_message === ""
  ) {
    Create_Contact_Message_Status("Please fill all the Details", "Error");
    return 0;
  }

  return 1;
}

// getting the form submission button
const sendMessagebutton = document.getElementById("sendMessage");

// listening to click actions
sendMessagebutton.addEventListener("click", () => {
  // getting the contact form details
  // creating simple status of success type
  if (Fetch_Contact_Form_Details())
    Create_Contact_Message_Status("Message Sent Successfully!!", "Success");
});
