"use strict"

console.clear();

{
    // const year = 2023;
    // const month = 1; // 2月

    // let year = 2023;
    // let month = 1; // 2月

    const today = new Date();
    let year =today.getFullYear();
    let month = today.getMonth();

    function getCalendarhead(){
        const dates = [];
        const d = new Date(year, month, 0).getDate();  //先月末日の日付を取得
        const n = new Date(year, month, 1).getDay();   //今月初日の曜日を取得（数字）

        for(let i = 0; i < n; i++){
            //31
            //30,31
            //29,30,31
            dates.unshift({
                date: d - i,         //日付けの取得 
            isToday: false,          //本日の日付かどうか
                isDisabled: true,    //日付が先月か来月かどうか
            });
        }
        // console.log(dates);
        return dates;                 //戻り値
    }

    function getCalendarBody(){
        const dates = [];         // date:日付,day:曜日
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= lastDate; i++){
            dates.push({
                date: i,           //日付けの取得       
                isToday: false,    //本日の日付かどうか
                isDisabled: false, //日付が先月か来月かどうか
            });
        }
        if (year === today.getFullYear() && month ===today.getMonth()){
            dates[today.getDate() - 1].isToday = true;
        }
        // console.log(dates);
        return dates               //戻り値
    }

    function getCalendarTail(){
        const dates = [];
        const lastDay = new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < 7 - lastDay; i++){
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }
        // console.log(dates);
        return dates;             //戻り値
    }

    function createCarendar(){       //日付を統合する

        const tbody = document.querySelector("tbody");

        while (tbody.firstChild){
            tbody.removeChild(tbody.firstChild);
        }

        const title = `${year}/${month +1}`;                  //テンプレートリテラル
        document.getElementById("title").textContent = title; //バッククォーテーション(`)
                                                             //で全体を囲む文字列の中に
        const dates = [                                      //${式}　式を埋め込める。
            ...getCalendarhead(),
            ...getCalendarBody(),
            ...getCalendarTail(),
        ];
        const weeks = [];              //週毎の配列にする
        const weeksCount = dates.length / 7;

        for (let i = 0; i < weeksCount; i++){
            weeks.push(dates.splice(0,7));
        }
        weeks.forEach(week => {
            const tr = document.createElement("tr");
            week.forEach(date => {
                const td = document.createElement("td");

                td.textContent = date.date;
                if (date.isToday){
                    td.classList.add("today");
                }
                if (date.isDisabled){
                    td.classList.add("disabled")
                }

                tr.appendChild(td);
            
            });
            document.querySelector("tbody").appendChild(tr);
        });
    }

    document.getElementById("prev").addEventListener("click",() =>{
        month--;
        if (month < 0){
            year--;
            month = 11;
        }

        createCarendar();

    })

    document.getElementById("next").addEventListener("click",() =>{
        month++;
        if (month > 11){
            year++;
            month = 0;
        }

        createCarendar();

    })
    document.getElementById("today").addEventListener("click",() =>{
        year = today.getFullYear();
        month = today.getMonth();

        createCarendar();

    })

    createCarendar();
    
}

