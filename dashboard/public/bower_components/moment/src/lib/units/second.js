import { addFormatToken } from "../format/format";
import { makeGetSet } from "../moment/get-set";
import { addRegexToken, match1to2, match2 } from "../parse/regex";
import { addParseToken } from "../parse/token";
import { addUnitAlias } from "./aliases";
import { SECOND } from "./constants";
import { addUnitPriority } from "./priorities";

// FORMATTING

addFormatToken("s", ["ss", 2], 0, "second");

// ALIASES

addUnitAlias("second", "s");

// PRIORITY

addUnitPriority("second", 15);

// PARSING

addRegexToken("s", match1to2);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);

// MOMENTS

export var getSetSecond = makeGetSet("Seconds", false);
