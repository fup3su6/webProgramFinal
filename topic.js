var topic = [
   "好好吃蘿蔔丁一個",
    "自製葡萄乾一粒",
    "明天見金針菇一朵",
    "香噴噴洋蔥一圈",
    "有機高麗菜心一顆",
    "非基改蔥花一粒",
    "清爽薄荷葉一片"
];

var price = [
	"- 2360$",
	"- 5010$(售完)",
	"- 3740$",
	"- 12,370$",
	"- 35,820$(售完)",
	"- 4680$",
	"- 18,690$"
];
var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6,15);