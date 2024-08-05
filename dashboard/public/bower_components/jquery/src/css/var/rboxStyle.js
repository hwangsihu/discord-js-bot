define(["./cssExpand"], (cssExpand) => new RegExp(cssExpand.join("|"), "i"));
