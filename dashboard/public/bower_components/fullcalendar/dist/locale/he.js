!((e, t) => {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("moment"), require("fullcalendar")))
    : "function" == typeof define && define.amd
      ? define(["moment", "fullcalendar"], t)
      : "object" == typeof exports
        ? t(require("moment"), require("fullcalendar"))
        : t(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, (e, t) =>
  ((e) => {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = (e, n, r) => {
        t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
      }),
      (t.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, "a", n), n;
      }),
      (t.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (t.p = ""),
      t((t.s = 139))
    );
  })({
    0: (t, n) => {
      t.exports = e;
    },
    1: (e, n) => {
      e.exports = t;
    },
    139: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), n(140);
      var r = n(1);
      r.datepickerLocale("he", "he", {
        closeText: "סגור",
        prevText: "&#x3C;הקודם",
        nextText: "הבא&#x3E;",
        currentText: "היום",
        monthNames: [
          "ינואר",
          "פברואר",
          "מרץ",
          "אפריל",
          "מאי",
          "יוני",
          "יולי",
          "אוגוסט",
          "ספטמבר",
          "אוקטובר",
          "נובמבר",
          "דצמבר",
        ],
        monthNamesShort: [
          "ינו",
          "פבר",
          "מרץ",
          "אפר",
          "מאי",
          "יוני",
          "יולי",
          "אוג",
          "ספט",
          "אוק",
          "נוב",
          "דצמ",
        ],
        dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
        dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !0,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
        r.locale("he", {
          buttonText: { month: "חודש", week: "שבוע", day: "יום", list: "סדר יום" },
          allDayText: "כל היום",
          eventLimitText: "אחר",
          noEventsMessage: "אין אירועים להצגה",
          weekNumberTitle: "שבוע",
        });
    },
    140: (e, t, n) => {
      !((e, t) => {
        t(n(0));
      })(0, (e) =>
        e.defineLocale("he", {
          months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
            "_"
          ),
          monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: (e) => (2 === e ? "שעתיים" : e + " שעות"),
            d: "יום",
            dd: (e) => (2 === e ? "יומיים" : e + " ימים"),
            M: "חודש",
            MM: (e) => (2 === e ? "חודשיים" : e + " חודשים"),
            y: "שנה",
            yy: (e) => (2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"),
          },
          meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: (e) => /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e),
          meridiem: (e, t, n) =>
            e < 5
              ? "לפנות בוקר"
              : e < 10
                ? "בבוקר"
                : e < 12
                  ? n
                    ? 'לפנה"צ'
                    : "לפני הצהריים"
                  : e < 18
                    ? n
                      ? 'אחה"צ'
                      : "אחרי הצהריים"
                    : "בערב",
        })
      );
    },
  })
);
