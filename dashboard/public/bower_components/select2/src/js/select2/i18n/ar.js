define(() => {
  // Arabic
  return {
    errorLoading: () => "لا يمكن تحميل النتائج",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "الرجاء حذف " + overChars + " عناصر";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "الرجاء إضافة " + remainingChars + " عناصر";
    },
    loadingMore: () => "جاري تحميل نتائج إضافية...",
    maximumSelected: (args) => "تستطيع إختيار " + args.maximum + " بنود فقط",
    noResults: () => "لم يتم العثور على أي نتائج",
    searching: () => "جاري البحث…",
    removeAllItems: () => "قم بإزالة كل العناصر",
  };
});
