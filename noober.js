// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // create a variable for the passenger's first name and pulls it from ride
  let passengerFirstName = ride.passengerDetails.first
  
  // create a variable for the passenger's last name and pulls it from ride
  let passengerLastName = ride.passengerDetails.last
  
  // creates a variable for the passenger's phone number and pulls it from ride
  let passengerPhoneNum = ride.passengerDetails.phoneNumber
  
  // creates a array for the passenger's pick up location and pulls it from ride [address, city, state, zip]
  let pickupLocation = [ride.pickupLocation.address, ride.pickupLocation.city, ride.pickupLocation.state, ride.pickupLocation.zip]

  // creates an array for the passenger's drop off location and pulls it from ride [address, city, state, zip]
  let dropoffLocation = [ride.dropoffLocation.address, ride.dropoffLocation.city, ride.dropoffLocation.state, ride.dropoffLocation.zip]
  
  // creates a variable for number of passengers and pull the value from ride
  let numOfPassengers = ride.numberOfPassengers
  
  // creates a variable that holds true or false if the passenger wants a purple ride
  let wantsPurple = ride.purpleRequested

  // Creates a variable to hold the type of car required for the ride.
  let rideType

  //conditional checks to determine what type of ride should be selected
  if (wantsPurple == true){
    rideType = `Noober Purple`
  }
  else if(numOfPassengers > 3){
    rideType = `Noober XL`
  }
  else{
    rideType = `Noober X`
  }

  //Displays data in a human readable format

  console.log(`${rideType} passenger ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNum}. Pick up at: ${pickupLocation[0]}, ${pickupLocation[1]}, ${pickupLocation[2]} ${pickupLocation[3]}. Drop off at: ${dropoffLocation[0]}, ${dropoffLocation[1]}, ${dropoffLocation[2]} ${dropoffLocation[3]}`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
