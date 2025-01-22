"use strict";

/* page */
const page = {
  timer: document.querySelector(".timer"),
  titleYear: document.querySelector(".timer__title_year"),
  title: document.querySelector(".timer__title"),
  monthNumber: document.querySelector(".number_month"),
  monthTitle: document.querySelector(".title_month"),
  dayNumber: document.querySelector(".number_day"),
  dayTitle: document.querySelector(".title_day"),
  hourNumber: document.querySelector(".number_hour"),
  hourTitle: document.querySelector(".title_hour"),
  minuteNumber: document.querySelector(".number_minute"),
  minuteTitle: document.querySelector(".title_minute"),
  secondNumber: document.querySelector(".number_second"),
  secondTitle: document.querySelector(".title_second"),
};

/* util */
function getDates() {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, -1);
  return {
    month: nextYear.getMonth() - now.getMonth(),
    day: nextYear.getDate() - now.getDate(),
    hour: nextYear.getHours() - now.getHours(),
    minute: nextYear.getMinutes() - now.getMinutes(),
    second: nextYear.getSeconds() - now.getSeconds(),
  };
}

/* formatter */
function titleMaker(number, type) {
  const title = new Intl.RelativeTimeFormat("ru-RU", { numeric: "always" })
    .format(number, type)
    .replace("через", "")
    .replace("назад", "")
    .trim()
    .slice(2)
    .trim();
  return title;
}

/* output */
function timerOutput() {
  const timeLeft = getDates();
  const nextYear = new Date().getFullYear() + 1;
  if (Object.values(timeLeft).every((date) => date == 0)) {
    alert(`С Новым ${nextYear} Годом !!!`);
  }
  page.titleYear.innerText = nextYear;
  page.monthNumber.innerText = timeLeft.month;
  page.monthTitle.innerText = titleMaker(timeLeft.month, "month");
  page.dayNumber.innerText = timeLeft.day;
  page.dayTitle.innerText = titleMaker(timeLeft.day, "day");
  page.hourNumber.innerText = timeLeft.hour;
  page.hourTitle.innerText = titleMaker(timeLeft.hour, "hour");
  page.minuteNumber.innerText = timeLeft.minute;
  page.minuteTitle.innerText = titleMaker(timeLeft.minute, "minute");
  page.secondNumber.innerText = timeLeft.second;
  page.secondTitle.innerText = titleMaker(timeLeft.second, "second");
}

/* app */
setInterval(() => {
  timerOutput();
}, 1000);
