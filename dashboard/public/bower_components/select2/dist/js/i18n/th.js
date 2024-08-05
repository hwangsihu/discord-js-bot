/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/th", [], () => ({
      errorLoading: () => "ไม่สามารถค้นข้อมูลได้",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "โปรดลบออก " + t + " ตัวอักษร";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "โปรดพิมพ์เพิ่มอีก " + t + " ตัวอักษร";
        return n;
      },
      loadingMore: () => "กำลังค้นข้อมูลเพิ่ม…",
      maximumSelected: (e) => {
        var t = "คุณสามารถเลือกได้ไม่เกิน " + e.maximum + " รายการ";
        return t;
      },
      noResults: () => "ไม่พบข้อมูล",
      searching: () => "กำลังค้นข้อมูล…",
      removeAllItems: () => "ลบรายการทั้งหมด",
    })),
    { define: e.define, require: e.require }
  );
})();
