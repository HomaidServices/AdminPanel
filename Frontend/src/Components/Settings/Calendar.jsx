import React, { useEffect, useState } from 'react'

export default function Calendar() {
  const currentDate = new Date();

  const [current, newCurrent] = useState([currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear()])
  console.log(current)
  function generateCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
          cell.textContent = '';
        } else {
          cell.textContent = dayCounter;
          dayCounter++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }
  }
  useEffect(() => {
    generateCalendar(current[1], current[2])

  }, [current])

  const handlecalendarclick = (e) => {
    //  console.log(e.target.name)
    let name = e.target.name
    if (name === 'previous') {
      if (current[1] == 0) {
        newCurrent([1, 11, current[2] - 1])

      }
      else {
        newCurrent([1, current[1] - 1, current[2]])

      }

    }
    else {
      if (current[1] == 11) {
        newCurrent([1, 0, current[2] + 1])

      }
      else {
        newCurrent([1, current[1] + 1, current[2]])

      }
    }
  }
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (
    <div className="calendar shadow rounded my-2 p-2">
      <h1 className="bg-success rounded-top text-center">Calendar </h1>
      <h2 className='d-flex justify-content-between'>
        <button name='previous' className="btn-secondary rounded border-0  me-auto" onClick={handlecalendarclick}>{'<'}</button>
        {month[current[1]] + ' ' + current[2]}
        <button name='next' className="btn-secondary rounded border-0 ms-auto" onClick={handlecalendarclick}>{'>'}</button>
      </h2>
      <table className='table table-bordered rounded'>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="calendar-body">
          {/* <!-- Calendar content will be dynamically generated here --> */}
        </tbody>
      </table>
    </div>
  )
}
