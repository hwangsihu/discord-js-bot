import { addFormatToken } from "../format/format";
import { makeGetSet } from "../moment/get-set";
import { addRegexToken, match1to2, match2 } from "../parse/regex";
import { addParseToken } from "../parse/token";
import { addUnitAlias } from "./aliases";
import { MINUTE } from "./constants";
import { addUnitPriority } from "./priorities";

// FORMATTING

addFormatToken("m", ["mm", 2], 0, "minute");

// ALIASES

addUnitAlias("minute", "m");

// PRIORITY

addUnitPriority("minute", 14);

// PARSING

addRegexToken("m", match1to2);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);

// MOMENTS

export var getSetMinute = makeGetSet("Minutes", false);
