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
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = (e, r, n) => {
        t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
      }),
      (t.n = (e) => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return t.d(r, "a", r), r;
      }),
      (t.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (t.p = ""),
      t((t.s = 77))
    );
  })({
    0: (t, r) => {
      t.exports = e;
    },
    1: (e, r) => {
      e.exports = t;
    },
    77: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), r(78);
      var n = r(1);
      n.datepickerLocale("ar-ly", "ar", {
        closeText: "إغلاق",
        prevText: "&#x3C;السابق",
        nextText: "التالي&#x3E;",
        currentText: "اليوم",
        monthNames: [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ],
        monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        weekHeader: "أسبوع",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !0,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
        n.locale("ar-ly", {
          buttonText: { month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة" },
          allDayText: "اليوم كله",
          eventLimitText: "أخرى",
          noEventsMessage: "أي أحداث لعرض",
        });
    },
    78: (e, t, r) => {
      !((e, t) => {
        t(r(0));
      })(0, (e) => {
        var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
          r = (e) =>
            0 === e
              ? 0
              : 1 === e
                ? 1
                : 2 === e
                  ? 2
                  : e % 100 >= 3 && e % 100 <= 10
                    ? 3
                    : e % 100 >= 11
                      ? 4
                      : 5,
          n = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"],
          },
          o = (e) => (t, o, d, a) => {
            var u = r(t),
              s = n[e][r(t)];
            return 2 === u && (s = s[o ? 0 : 1]), s.replace(/%d/i, t);
          },
          d = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        return e.defineLocale("ar-ly", {
          months: d,
          monthsShort: d,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: (e) => "م" === e,
          meridiem: (e, t, r) => (e < 12 ? "ص" : "م"),
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: o("s"),
            ss: o("s"),
            m: o("m"),
            mm: o("m"),
            h: o("h"),
            hh: o("h"),
            d: o("d"),
            dd: o("d"),
            M: o("M"),
            MM: o("M"),
            y: o("y"),
            yy: o("y"),
          },
          preparse: (e) => e.replace(/،/g, ","),
          postformat: (e) => e.replace(/\d/g, (e) => t[e]).replace(/,/g, "،"),
          week: { dow: 6, doy: 12 },
        });
      });
    },
  })
);
