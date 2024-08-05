import { addFormatToken } from "../format/format";
import { addRegexToken, matchSigned, matchTimestamp } from "../parse/regex";
import { addParseToken } from "../parse/token";
import toInt from "../utils/to-int";

// FORMATTING

addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");

// PARSING

addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", (input, array, config) => {
  config._d = new Date(Number.parseFloat(input, 10) * 1000);
});
addParseToken("x", (input, array, config) => {
  config._d = new Date(toInt(input));
});
