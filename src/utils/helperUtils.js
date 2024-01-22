export const getCurrentDate = () => {
  var currentDate = new Date();

  // Define options for formatting the date
  var options = { weekday: 'long', day: 'numeric', month: 'long' };
  
  // Format the date using the options
  var formattedDate = currentDate.toLocaleDateString('en-US', options);
  
  // Convert the formatted date to uppercase
  formattedDate = formattedDate.toUpperCase();
  
  // Remove the comma after the weekday
  const result = formattedDate.replace(',', '');
  
  console.log('lol',result )
  // Display the result
  return result
}