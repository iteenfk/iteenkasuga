"use strict"

function displayCalendar() {
    // 選択された月を取得する
    const monthSelect = document.getElementById("monthSelect");
    // console.log(monthSelect);
    const monthIndex = monthSelect.selectedIndex;
    // console.log(monthIndex);
    const monthValue = monthSelect.options[monthIndex].value;
    // console.log(monthValue);
    
    // 指定された月の最初の日を取得する
    const date = new Date();
    // console.log(date);
    date.setMonth(monthValue);
    date.setDate(1);
    // console.log(date.toLocaleDateString());
    
    // カレンダーのHTMLを作成する
    let calendarHTML = "<table>";
    // console.log(calendarHTML);
    calendarHTML += "<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>";
    // console.log(calendarHTML);

    // カレンダーの各日付についてループ処理する
    while (date.getMonth() == monthValue) {
      calendarHTML += "<tr>";
      for (let i = 0; i < 7; i++) {
        if (date.getDay() == i) {
          calendarHTML += "<td>" + date.getDate() + "</td>";
          date.setDate(date.getDate() + 1);
        } else {
          calendarHTML += "<td></td>";
        }
      }
      calendarHTML += "</tr>";
    }
    
    calendarHTML += "</table>";
    // console.log(calendarHTML);
    
    // カレンダーを表示する
    document.getElementById("calendar").innerHTML = calendarHTML;
  }
  