exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("locations").insert([
        { location: "Los Angeles, CA, USA" },
        { location: "Calabasas, CA, USA" },
        { location: "Boston, MA, USA" },
        { location: "Santa Fe, NM, USA" },
        { location: "Tempe, AZ, USA" },
        { location: "Flagstaff, AZ, USA" },
        { location: "Boulder, CO, USA" },
        { location: "Pueblo, CO, USA" },
        { location: "South Valley, NM, USA" },
        { location: "San Francisco, CA, USA" },
        { location: "Seattle, WA, USA" },
        { location: "San Diego, CA, USA" },
        { location: "Minneapolis, MN, USA" },
        { location: "Washington D.C., DC, USA" },
        { location: "Baltimore, MD, USA" },
        { location: "Portland, OR, USA" },
        { location: "Tampa, FL, USA" },
        { location: "Denver, CO, USA" },
        { location: "Philadelphia, PA, USA" },
        { location: "Chicago, IL, USA" },
        { location: "Phoenix, AZ, USA" },
        { location: "Houston, TX, USA" },
        { location: "Austin, TX, USA" },
        { location: "Charlotte, NC, USA" },
        { location: "Dallas, TX, USA" },
        { location: "Orlando, FL, USA" },
        { location: "St. Louis, MO, USA" },
        { location: "Atlanta, GA, USA" },
        { location: "Miami, FL, USA" },
        { location: "Melbourne, FL, USA" },
        { location: "Salt Lake City, UT, USA" },
        { location: "Greenville, SC, USA" },
        { location: "Sarasota, FL, USA" },
        { location: "Boise, ID, USA" },
        { location: "Asheville, NC, USA" },
        { location: "Nashville, TN, USA" },
        { location: "San Jose, CA, USA" },
        { location: "Grand Rapids, MI, USA" },
        { location: "Madison, WI, USA" },
        { location: "Huntsville, AL, USA" },
        { location: "Des Moines, IA, USA" },
        { location: "Fayetteville, NC, USA" },
        { location: "Colorado Springs, CO, USA" },
        { location: "Las Vegas, NV, USA" },
        { location: "El Paso, TX, USA" },
        { location: "New Orleans, LA, USA" },
        { location: "Albuquerque, NM, USA" },
        { location: "Kansas City, MO, USA" },
        { location: "Oklahoma City, OK, USA" },
        { location: "Watertown, WI, USA" },
        { location: "Huntsville, AL, USA" },
        { location: "Safford, AZ, USA" },
        { location: "Sweetwater, TX, USA" },
        { location: "Fargo, ND, USA" },
        { location: "Asheville, NC, USA" },
        { location: "West Palm Beach, FL, USA" },
        { location: "Lowell, MA, USA" },
        { location: "Hurricane, UT, USA" },
        { location: "Tybee Island, GA, USA" },
        { location: "Tehachapi, CA, USA" },
        { location: "Awendaw, SC, USA" },
        { location: "Wernersville, PA, USA" },
        { location: "Erie, PA, USA" },
        { location: "Yturria, TX, USA" },
        { location: "Plano, TX, USA" },
        { location: "Rhyolite, NV, USA" },
        { location: "Ewing Township, NJ, USA" },
        { location: "North Salt Lake, UT, USA" },
        { location: "Thornton, CO, USA" },
        { location: "The Dalles, OR, USA" },
        { location: "Ulysses, KS, USA" },
        { location: "Yuma, AZ, USA" },
        { location: "Frankfort, KY, USA" },
        { location: "Riley, KS, USA" },
        { location: "Hillsboro, OR, USA" },
        { location: "Nyack, NY, USA" },
        { location: "Post Falls, ID, USA" },
        { location: "Point Roberts, WA, USA" },
        { location: "Quartzsite, AZ, USA" },
        { location: "Oil City, PA, USA" },
        { location: "Jacksonville, FL, USA" },
        { location: "Detroit, MI, USA" },
        { location: "Indianapolis, IN, USA" },
        { location: "Memphis, TN, USA" },
        { location: "Louisville, KY, USA" },
        { location: "Milwaukee, WI, USA" },
        { location: "Tustin, CA, USA" },
        { location: "Omaha, NE, USA" },
        { location: "Raleigh, NC, USA" },
        { location: "Oakland, CA, USA" },
        { location: "Tulsa, OK, USA" },
        { location: "Arlington, TX, USA" },
        { location: "Wichita, KS, USA" },
        { location: "Aurora, CO, USA" },
        { location: "Honolulu, HI, USA" },
        { location: "Corpus Christi, TX, USA" },
        { location: "Lexington, KY, USA" },
        { location: "Henderson, NV, USA" },
        { location: "Saint Paul, MN, USA" },
        { location: "Anaheim, CA, USA" },
        { location: "Santa Ana, CA, USA" },
        { location: "Santa Monica, CA, USA" },
        { location: "Culver City, CA, USA" },
        { location: "Riverside, CA, USA" },
        { location: "Stockton, CA, USA" },
        { location: "West Hollywood, CA, USA" },
        { location: "Pasadena, CA, USA" },
        { location: "Saint Paul, MN, USA" },
        { location: "Cincinnati, OH, USA" },
        { location: "Greensboro, NC, USA" },
        { location: "Lincoln, NE, USA" },
        { location: "Anchorage, AK, USA" },
        { location: "Plano, TX, USA" },
        { location: "Newark, NJ, USA" },
        { location: "Durham, NC, USA" },
        { location: "Chula Vista, CA, USA" },
        { location: "Toledo, OH, USA" },
        { location: "Laredo, TX, USA" },
        { location: "Chandler, AZ, USA" },
        { location: "Madison, WI, USA" },
        { location: "Lubbock, TX, USA" },
        { location: "Buffalo, NY, USA" },
        { location: "Chesapeake, VA, USA" },
        { location: "Norfolk, VA, USA" },
        { location: "Fremont, CA, USA" },
        { location: "Garland, TX, USA" },
        { location: "Irving, TX, USA" },
        { location: "Irvine, CA, USA" },
        { location: "Hialeah, FL, USA" },
      ]);
    });
};
