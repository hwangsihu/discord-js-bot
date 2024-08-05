import { addFormatToken } from "../format/format";
import { addRegexToken, match1 } from "../parse/regex";
import { addParseToken } from "../parse/token";
import toInt from "../utils/to-int";
import { addUnitAlias } from "./aliases";
import { MONTH } from "./constants";
import { addUnitPriority } from "./priorities";

// FORMATTING

addFormatToken("Q", 0, "Qo", "quarter");

// ALIASES

addUnitAlias("quarter", "Q");

// PRIORITY

addUnitPriority("quarter", 7);

// PARSING

addRegexToken("Q", match1);
addParseToken("Q", (input, array) => {
  array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

export function getSetQuarter(input) {
  return input == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((input - 1) * 3 + (this.month() % 3));
}
