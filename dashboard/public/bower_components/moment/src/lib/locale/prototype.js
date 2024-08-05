import { Locale } from "./constructor";

var proto = Locale.prototype;

import { calendar } from "./calendar";
import { longDateFormat } from "./formats";
import { invalidDate } from "./invalid";
import { ordinal } from "./ordinal";
import { preParsePostFormat } from "./pre-post-format";
import { pastFuture, relativeTime } from "./relative";
import { set } from "./set";

proto.calendar = calendar;
proto.longDateFormat = longDateFormat;
proto.invalidDate = invalidDate;
proto.ordinal = ordinal;
proto.preparse = preParsePostFormat;
proto.postformat = preParsePostFormat;
proto.relativeTime = relativeTime;
proto.pastFuture = pastFuture;
proto.set = set;

// Month
import {
  localeMonths,
  localeMonthsParse,
  localeMonthsShort,
  monthsRegex,
  monthsShortRegex,
} from "../units/month";

proto.months = localeMonths;
proto.monthsShort = localeMonthsShort;
proto.monthsParse = localeMonthsParse;
proto.monthsRegex = monthsRegex;
proto.monthsShortRegex = monthsShortRegex;

// Week
import { localeFirstDayOfWeek, localeFirstDayOfYear, localeWeek } from "../units/week";
proto.week = localeWeek;
proto.firstDayOfYear = localeFirstDayOfYear;
proto.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
import {
  localeWeekdays,
  localeWeekdaysMin,
  localeWeekdaysParse,
  localeWeekdaysShort,
  weekdaysMinRegex,
  weekdaysRegex,
  weekdaysShortRegex,
} from "../units/day-of-week";

proto.weekdays = localeWeekdays;
proto.weekdaysMin = localeWeekdaysMin;
proto.weekdaysShort = localeWeekdaysShort;
proto.weekdaysParse = localeWeekdaysParse;

proto.weekdaysRegex = weekdaysRegex;
proto.weekdaysShortRegex = weekdaysShortRegex;
proto.weekdaysMinRegex = weekdaysMinRegex;

// Hours
import { localeIsPM, localeMeridiem } from "../units/hour";

proto.isPM = localeIsPM;
proto.meridiem = localeMeridiem;
