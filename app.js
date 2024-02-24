// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXl8s83NIFmr7jSluLjaRccgi62y6ocLc",
  authDomain: "herconnect-fd466.firebaseapp.com",
  projectId: "herconnect-fd466",
  storageBucket: "herconnect-fd466.appspot.com",
  messagingSenderId: "614631122808",
  appId: "1:614631122808:web:ea47b77a71a62397fe4a8d",
  measurementId: "G-19XDCFYDB1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database service
const database = firebase.database();

// Handle form submission
const form = document.getElementById('dataForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    
    // Save data to Firebase database
    database.ref('users').push({
        name: name,
        email: email
    })
    .then(() => {
        console.log('Data saved successfully!');
        form.reset(); // Clear the form fields after submission
    })
    .catch((error) => {
        console.error('Error saving data:', error);
    });
});
