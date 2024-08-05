define(["../var/pnum"], (pnum) => new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"));
