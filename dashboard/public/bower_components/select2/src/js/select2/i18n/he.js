define(() => {
  // Hebrew
  return {
    errorLoading: () => "שגיאה בטעינת התוצאות",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "נא למחוק ";

      if (overChars === 1) {
        message += "תו אחד";
      } else {
        message += overChars + " תווים";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "נא להכניס ";

      if (remainingChars === 1) {
        message += "תו אחד";
      } else {
        message += remainingChars + " תווים";
      }

      message += " או יותר";

      return message;
    },
    loadingMore: () => "טוען תוצאות נוספות…",
    maximumSelected: (args) => {
      var message = "באפשרותך לבחור עד ";

      if (args.maximum === 1) {
        message += "פריט אחד";
      } else {
        message += args.maximum + " פריטים";
      }

      return message;
    },
    noResults: () => "לא נמצאו תוצאות",
    searching: () => "מחפש…",
    removeAllItems: () => "הסר את כל הפריטים",
  };
});
