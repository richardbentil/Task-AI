export const convertDate = (dateString: string) => {
// Convert the string to a Date object
const date = new Date(dateString);

// Extract the day, month (short), and year
const day = date.getDate(); // Get the day (1-31)
const month = date.toLocaleString('en-US', { month: 'short' }); // Get short month name
const year = date.getFullYear(); // Get the full year

return { day, month, year };

//console.log(`${day} ${month} ${year}`); // Output: 21 Nov 2024
}

export const getCountryFromDate = (dateString: string) => {
    const date = new Date(dateString);
  
    // Get the locale's time zone name (e.g., "America/New_York")
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    //console.log(`Time Zone: ${timeZone}`); // Example: "America/New_York"
  
    // Use `timeZone` or another library/API to determine the country
    return timeZone //.split('/')[0];  Extracts the region from the time zone
  };
  
