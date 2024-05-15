const firebaseConfig = {
    apiKey: "AIzaSyBVqa3uQVU2qKYF_cXv2j6jckROkt-8jvc",
    authDomain: "firstone-afb98.firebaseapp.com",
    databaseURL: "https://firstone-afb98-default-rtdb.firebaseio.com",
    projectId: "firstone-afb98",
    storageBucket: "firstone-afb98.appspot.com",
    messagingSenderId: "904147941468",
    appId: "1:904147941468:web:ed7d52d9882ea85438ce99"
  
  };
  
  // Initialize Firebase
  firebase.initializeApp( firebaseConfig );
  
  // Reference your database
  var contactFormDB = firebase.database().ref("admin-form");
  
  // Function to validate form inputs
  function validateFormInputs() {
    var batch = document.getElementById('batch').value;
    var startingDate = document.getElementById('starting-date').value;
  
    if (!batch || !startingDate ) {
      showModal("Please input all fields");
      return false;
    }
  
    return true;
  }
  
  // Event listener for form submission
  document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form inputs
    if (!validateFormInputs()) {
      return;
    }
  
    // Your form submission logic here
    const batch = document.getElementById('batch').value;
    const startingDate = document.getElementById('starting-date').value;
  
    saveMessages(batch, startingDate);
  
    // Display modal
    showModal("Form submitted successfully!");
  
    // Clear form inputs (optional)
    // document.getElementById("admin-form").reset();
  });
  
  // Function to go back
  function goBack() {
    window.history.back();
  }
  
  // Function to save messages to Firebase Realtime Database with error handling
  const saveMessages = async (batch, startingDate) => {
    try {
      const newContactForm = await contactFormDB.push(); // Use async/await for clarity
      await newContactForm.set({
        batch,
        Date: startingDate,
      });
      alert("Data saved successfully!");
      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      // Handle saving errors (e.g., display error message to user)
    }
  };
  
  