function displayCalendar() {
    // 選択された月を取得する
    const monthSelect = document.getElementById("monthSelect");
    const monthIndex = monthSelect.selectedIndex;
    const monthValue = monthSelect.options[monthIndex].value;
    
    // 指定された月の最初の日を取得する
    const date = new Date();
    date.setMonth(monthValue);
    date.setDate(1);
    
    // カレンダーのHTMLを作成する
    let calendarHTML = "<table>";
    calendarHTML += "<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>";
    
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
    
    // カレンダーを表示する
    document.getElementById("calendar").innerHTML = calendarHTML;
  }
  