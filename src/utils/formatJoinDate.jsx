export default function formatJoinDate(d) {

  const monthName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec",
  ];

  const date = new Date(d);
  //getting UTC dates because API provided UTC time
  let day = date.getUTCDate();
  let month = date.getUTCMonth();
  let year = date.getUTCFullYear(); 
  
  // const ss = date.split("");
  // for (let i = 0; i <= 9; i++) {
  //   if (i >= 0 && i <= 3) {
  //     year += ss[i];
  //   } else if (i >= 6 && i <= 6) {
  //     month += ss[i];
  //   } else if (i >= 8) {
  //     day += ss[i];
  //   }
  // }

  return `Joined ${day} ${monthName[month]} ${year}`;
}
