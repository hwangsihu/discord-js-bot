define(() => {
  // Thai
  return {
    errorLoading: () => "ไม่สามารถค้นข้อมูลได้",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "โปรดลบออก " + overChars + " ตัวอักษร";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "โปรดพิมพ์เพิ่มอีก " + remainingChars + " ตัวอักษร";

      return message;
    },
    loadingMore: () => "กำลังค้นข้อมูลเพิ่ม…",
    maximumSelected: (args) => {
      var message = "คุณสามารถเลือกได้ไม่เกิน " + args.maximum + " รายการ";

      return message;
    },
    noResults: () => "ไม่พบข้อมูล",
    searching: () => "กำลังค้นข้อมูล…",
    removeAllItems: () => "ลบรายการทั้งหมด",
  };
});
