/*
 * DAY 5
 *
 * The first 7 characters will either be F or B; these specify exactly one of the 128 rows on the
 * plane (numbered 0 through 127). Each letter tells you which half of a region the given seat is
 * in. Start with the whole list of rows; the first letter indicates whether the seat is in the
 * front (0 through 63) or the back (64 through 127). The next letter indicates which half of
 * that region the seat is in, and so on until you're left with exactly one row.
 * 
 * The last three characters will be either L or R; these specify exactly one of the 8 columns of
 * seats on the plane (numbered 0 through 7). The same process as above proceeds again, this time
 * with only three steps. L means to keep the lower half, while R means to keep the upper half.
 * 
 * Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this
 * example, the seat has ID 44 * 8 + 5 = 357.
 * 
 * What is the highest seat ID on a boarding pass?
 */


// Create a Template Literal using ` `
const entries = 
`BBBFBFFRLR
BFFFFFFRLL
BFBBBBFLLL
BBFBFFFRRR
BBBFBFBRLR
FBFFBBBLRL
FBFFBFFRRL
FFBBFFFRRL
BBBFBFBLLL
BBBBFFFLLR
FBBFFBFRRR
BFFFBBBLRR
FFBBFFBRLR
FFBFFBFRRL
BBBBFBFRLL
BBBBBFFLRL
FFBBBFBRRR
FFFBBBFLLR
FFBFFBBLRL
FBBFBBFLRL
FFBBBBFRRR
BFBFBFFRLL
BBFBFFFLLL
FFFBBBFRRL
BBFFBFBRLL
FBFBFBFLLL
BBFFFFBLRR
FFBBBFFRRL
FFFBFBBLRL
FBBFBBBLLL
BBFBFFBRLR
FBFBFBBRLL
FFFBBFBLRL
FFBFFBFLRR
BBFBBBFRRL
BBFBBFBLLR
BBFBBBFRLL
BFFBBBBRLR
FBFBFBBRLR
FBBBFFBRRR
FBBBFBFLLR
FFBFBBFLRL
BFBFBFBRLL
BFFFBFBLRR
FFBBBFBRLR
BBFBFFBLRR
BFFFFBBLLL
BFFFFBFLLR
FBFBBBBRLR
BBFFBBFLRL
BFBFFBBRLR
FFFBFBFRLL
BFFFBBFRRL
BBFBFBFRLL
BFBFFFFRRL
FFBFBBBRLR
FBBFFFFLRR
FBFBBFBRLR
BBFFBFFLRR
BBBFFBFLRR
BFFFFFBRLR
FBBFFFBRRL
BFFFBBFRRR
BBBFBFBRLL
BFBBFBBRLR
BFBFBFBLLL
BBBFFFFRLL
BFFFFBFRLL
FFBBFFBLLL
FBFFBBFRRL
FFBBFBFRLR
FFBFFFFRLR
BFBBBFBLLL
FBBFFBFRRL
FBFBFFFLRR
BFFBBBFLRR
FBBFBBBRLL
FFBFBBFLLR
FFFBFFBRLR
BBFBBFFRRR
BFBBBFFLLL
BFBBFBBRRR
BBFFFBBLLR
BBFBFFBLLR
BFFBBFFRRL
FFFBBFBRRR
BBFBBFFLLR
BFFBBBBRLL
BFFBBFFRLR
FFFBFBFLRL
FBFFBBFLLR
BFBBFBFRRL
BFBFFFBRLL
FBBFBFFLRR
FFBFBBFLLL
BFBBFBBRRL
FBBBFFFLRR
BBBFBBFRRL
BBFBBBFRRR
BFFBFFFLRL
BFBFBBFRRL
FFBBFFFLLR
FBFFFFBLLL
BFBBBBFRLR
FFBFBFBRLL
FBFFFBFLRL
FFBFBFFLLL
FBBBFFBRLL
FBBBBBFLLR
FFBFBBBLLL
BFFBBBBLLL
BFFBBBFRLL
FBFFFFBLRL
BFBFFBFRRR
FFBFFFFRLL
BBFBBFFRRL
BBFBFBBLLL
FFBBBBBRRR
BBBFFFBLRL
FBFBBBFRLL
BFBFFFBRRL
FFBFBBBRLL
FBBBFBFLLL
FBFBFFBLRL
FBBBFFFLRL
FBBBFBBRRL
FBBFFBBRRR
FFBFFBBRRR
FBFFFFFLLL
FFBBBFFRLL
FBBFFFBRRR
BFBBBFBRRR
FFBFFBBRRL
FFFBFBFLLR
FBBFBFBRLL
FBFFBFFRLR
BFBBFFBLRR
FFBFBBBLRR
FFBFBBFLRR
BFFFBFFLRL
BBFFFBBRLL
FFFBBFFLRL
BBFBBFFLLL
BFFBFFBRLR
BBBFFBFRRR
FBFFBFBRLL
FBBBFFBLLR
FFFBBFFLRR
FFFBBFBLLL
FBFBFBBLLR
FBBBFBFRLR
BFBBBFBLRL
FBFBFFBLLL
FBFBBFBRRR
BFFBBBBRRR
BFFFBFBLLR
FFFBFBBRRL
BBBBFBBLLL
FBFFBFBLRR
BFFFFFFLLL
FFBFBFBRLR
FBBBFFFLLR
BBBFFFBLRR
FBFFFFBRRL
FBFFFFBRLR
FBFFBBBLRR
BBFBFBFRRL
BFFFBFBRLL
FBFBBFFRRR
BFFFFFFRLR
BFBBBBBLLR
FBBBBFBLRR
FBBFBBFRLR
BBFBBBFLRR
FBFFFBBLRR
BBBBFFFRLL
BFBFFBBRRR
FBFFFBBLLR
FFBBBFFRLR
FBBFFFBRLL
FBBFFBBRRL
BFFFFFFLLR
BBFBFBBRRL
FBFFFBFRRL
BBBBFFFLRL
FFBFFBBLRR
FBFFFFFRLL
BFFFFBFRRR
FFBFFFBRRR
FBFBBFBRRL
FFBFBFBLRR
BBFBFFFRLR
BBFFBBBRRR
BBFFFBFLRL
FBBBBBFLRL
FBBBFFBRLR
FBBFBBBLLR
FFBFBBFRLR
BFFBFBBLRL
BBBFBFBLRL
BFFBBFBRLR
BFFFFFBRRL
FBBFFBBLRR
BFBBBBFRRL
BBBBFFFRLR
BFFFFFBLLR
BBBBFBFRRR
BFFBFBBRLR
BFBFBFFLRL
BBFFBBBRLR
BBFFFBFLLR
FFBFFBFLLL
BBFFFFFRRR
BBFBFFFLLR
BFBFFFFLRR
FBFBFBBRRL
FBFFFFFRLR
BBBBFFBLLL
BBFFFBBLRR
FFBBBBBRLL
FBFFFFFLRR
BFFFBBFLRL
FBBBBFBLLL
FBFBBFFLLL
BBFFFBBRLR
FFFBFFBRRR
BBFFBBBRLL
BFBFFBBLLR
FFFBBBBRRL
BFFFFBFLLL
FBBFBBBRRR
BFBBFBBLLL
BFBFBBFLRL
FBFFBFFRRR
FBBFFFFRLL
FBBBFBFRRR
BBBFBFFLRR
BBFFBBBLRR
FFBBFBBRRR
BFBBBFBLLR
BBFBFFBRLL
FFBBFBBRLL
FFBBBFFLRL
BBFBBBBRRR
FFFBFFFLRR
BFBBBFBRLL
FFBBFBBLLR
BFBFBFFLRR
BBBBFBBRRL
FBBFFBFLLR
BFBBBFFRLL
BBBFFBBLLL
BFBFFBBLRR
FBFFBBBRLR
FBBFBFBRRL
FBFBBBFRRR
FBFFFBBRLR
BBFFFFFLRR
BBBBFFBRLL
BFFBFFFRRR
FFBFBFFLRR
FFFBFBFRLR
BFFFBBFRLL
FFBFBBBRRR
BFFFFBBRLR
BBBFFFFRRL
FBFBFBFRRR
FBBBBFBRLR
FBFBBBFRLR
BBBBFFFLRR
BFFBFFFRLR
BFFFBBBLLL
BFBBFFBRLR
BFBFFBFLLL
BFBFBBFRLL
BFFBBFBLLL
BFBBFFFRLL
FFBBFFBLRL
BBBBFFBRRL
FBBBFFBLRR
FFBBBBBLLR
FBFFFBFLLR
BBFFBFFRRL
BFBFBBBLLL
FBBBBFBRRL
FBFBBBBRRR
BBFBBFBRRR
FBFBFFFRLL
BFBFFBFLRL
BFBFFBBLRL
FFBFBFFRLR
BFBBFBBRLL
FBBBBBBRLR
BBFBBBBLRL
FFBBFBFLLL
FFBBFBBLLL
FFFBBFBRLR
BBBBFBFLLL
FBFBFFBLRR
FFBBFFFLRL
BBFBFFFRLL
FBFFFBFRLL
BBBFBBFLLL
FFBBFFBLRR
BBBBFBFLRR
FBFFFFFRRL
BFBFFBFRLR
FBFBFFBRLR
FBBFBBFRLL
BFFFFFFLRR
BBBFFFFLLL
FFFBBFFRLR
FFBBFFFRLR
BBBFFBBRRL
FBBFBFBLRL
BFFFBBBLRL
FBBFBBBRLR
BFBFFFBLLL
FBFFFBBLRL
FBFFBFFRLL
BFBFBFBLLR
BBFFBFBRLR
BBFFFFBRLR
FFFFBBBRRR
FFBBBBBLLL
BBFBBBBRRL
BBBBBFFLLR
FFFBFFFRLL
BFFBBFFLRR
BFFBBFFLRL
BBBFFBFRLL
FFBFBFBLLL
BFBBBBBLLL
FFBBBBFLRL
FBFFBBFLRL
BBFFFFBLRL
BBBFBBBRLL
BFBFFFBLLR
BFBFBFBRLR
BFBBFFFRRR
BFFBFBFLLL
FBBFBFBLLR
FBFBFBFLRR
FFBFFBFLLR
FFBFFFBLLL
FBFFBFFLRL
FFBBFBFLLR
BFFFBFFLRR
BBFFFBFRLL
FBFBBBFLRR
FFBBFFFLRR
FBBBFBBLLL
BFFBFBFRLR
FFBFBBBLLR
BBBFFBFLLR
BFBFFFBLRL
BFFBBFFLLL
FBFBFFFRRL
BFFBBBBLLR
FFBBBFFLLR
BBFFBBFRRL
FFBFFBFLRL
BBFFBFBRRL
BFBBBFFLRR
BFFBFBBRRR
FBBFBBBLRL
FFBFBFFRRR
BBFBFFFLRL
BBBFFBBLRR
FBBFBFBLRR
BFBBBBFLRL
FBFFFBBRRL
BFFFFBFLRR
BBFFBBFRLL
BFFBFBBLRR
FBBBBFFRLL
BFBFFFFLRL
FBBBBBBLLL
BFBBBBFRLL
BFBFFFFLLL
FFBBBFBLRL
BBFFFFBLLL
BFBBFBFLRR
FFFFBBBRRL
BFFBFBBLLL
FFBBFFFRLL
BFFFBFBRRR
FBBBFBBRRR
BBFBBFBLRR
BFFBFFBLRL
BBFFFBBLRL
BFFBBBFRRR
FFBFFBBRLR
BFFBFBFLLR
BFFBBFFRLL
FBBFBFBRLR
BFFFFFBLRR
BFBFFBFRRL
BFBBFFBLLL
FBFFFFBRRR
BBFFBFFLLL
FBBBBBBLLR
BFFFFFBRRR
BFBFBFFRRR
BBFFBFFRLR
FBBBFFBLLL
BFBFBBFLLL
BFBFBBFRLR
BBFFBFFLLR
FBBFFFBLRR
FBFFBBFLRR
BFFFFBBLLR
FFBFBFBLRL
FFFBBBFRLL
BFFBBFBRRR
BFFBBBFRLR
BBBBFFFRRR
FBBBBFBLRL
FBFFFFBLRR
BFFFBBBRLL
FBFBBFFRLR
FFBBBBFLLR
FFBFFBFRLR
FFBBBBBRRL
FBFFFFFLLR
BFBBBFFLLR
FBFFBBFRLL
BBFFFBFRRL
BBFFBFFLRL
FBFBFFFLLL
BBFFBFFRLL
FFFBFFBLLL
BBFBBFBLRL
BBFFBFBLRL
BFBFBFBRRL
FBBBFBBLRR
FBBBFBFLRL
FBBBBFFRLR
FFBFBFFLLR
BFFFBFBRLR
FBBFFBBRLR
BBFFBBFRRR
BBBFFBBRRR
FFBFFFBRLR
BBBBFFBLRR
BBFBFBFLLL
BBFFFBBLLL
BFBBFFBLRL
FBFBFBFRRL
BBFBBBFLLR
FBBBBBFRRL
BFBFBFBLRR
FBFBFFFRRR
BFBFFBFLLR
BBBFFBFRRL
BBBFBFFLLL
BFFFBFFRRR
FFFBBBBLRR
BFFBBFBLRR
BFFBFBFLRL
BBBBFFBLRL
FBBFBBFRRR
FFFBBBBLLL
FBFFFBBRRR
FBBBFFFLLL
FFBBBBBRLR
BFBFFFFRRR
FBBFFFFRRR
BBBFBFFLRL
BFFFBFFRLR
BFBFFFBLRR
BFBBFBFRLR
BBFFFFFRLR
BFFFBBFLLL
BBBFFFFLRL
BBFFBBBLLL
FBFFBFBRRL
BFBBBBBRLR
FBBFFFBLLL
FBBBFBFLRR
BBFBBBFLLL
FFBFFBBLLR
BFFFBBFLRR
BBBBFFBRRR
BBFFFFBRRL
FBFFFBFLLL
BBFFBBFLLL
BFFFFFFRRL
FBBFFBBRLL
FFBBFBFRRL
BBBFFBBRLL
BFBFBBFRRR
FFBFFFBLRL
BFFFFBBRRR
FFFBBFBRRL
BBBFFBFLRL
BFFBBFBLLR
FFFBFFBLRL
FBBBFBBRLL
BFBBFBBLLR
FBBFFFFLLR
FFBFBFBRRL
FBBFFBBLLL
BBBBFFFLLL
FBBBBBBLRR
FFFBBBBRLR
FBBBBFFRRL
BBFFBBBRRL
FBBFFFFRLR
FFBFBFFLRL
FBFFFBFRRR
FBBFBBFLLR
FBBBBBFLLL
FFBFBFFRLL
FFBFFFFLRR
FFBBBBFLRR
FFFBFBBLLR
BBBFBFBLRR
FFBBFBBRLR
FBFFFFBLLR
BBFBFBBRLR
FBBFFFFLLL
BBBBFBBLLR
BFBBBBFRRR
BBBFBFFRRR
BFFBBBBLRL
BBBFBBBRRR
FBFFBFFLLL
FFBFBFFRRL
BBBBFFBRLR
BFBBFFFRRL
FFBFFFBRLL
BBBBFBFLRL
FBBBFBBLRL
FFBBBFFLLL
FFFBFFBLLR
BFBBFBBLRR
FFBFBBBLRL
BFBBFFFLRR
FFFBFFFLLR
BFBBBBFLLR
BFFBFBFRLL
BFFBFBBRLL
BBFBFFFLRR
BBBFBBFLLR
FBFBFFFLRL
FBFFBFBLLL
FFFBFFBLRR
BFFFBFFRLL
BBFFBBFLLR
BBFFBBBLRL
FBFBBBBLLL
FBBFBBBLRR
FBBBBBFLRR
FBBBBBBLRL
FBFBBFBLLL
FFFBFFBRLL
FBFBBFBLRR
FBBFFBFRLR
BBFFFFFRLL
FFBBFBBRRL
BFBFBBBRLL
BBBFFFFLLR
FBFFFBFRLR
BFFFBFFLLL
BBBFFFBRLL
FBBBBFBLLR
FBBFBFBLLL
BBFBFBFLRR
BFBFBFBLRL
FBBBBBBRRL
BFBFFFFRLL
BBBFBBBLLL
BFBFFFBRLR
FFFBBBBRRR
FFBFFFBRRL
FBFBBBBLRL
BBFBBFBRRL
BBBFFBBLRL
FBFBFBBLLL
FBBBBBBRRR
FFFBFBBRLR
FBFFBFBRRR
FFBBFBBLRL
BBFBBBBLRR
BFFFFFFRRR
BBFFBFBLRR
FFFBBBFLRR
BBFFBBFLRR
BFBFBFFRLR
FBFBFFBRLL
FFBFFFFLLL
FBFBFFBLLR
BFFFFBBLRR
FBBBFFFRRR
FFFBFFFRRL
FBFBBBFRRL
FBBFFFBLRL
FBBBFFBRRL
BBBFBBFLRR
BFBBFBFRRR
FFBFFBFRLL
BBBFBBBRRL
FBBFBFFLRL
BBBFBFFRLL
FFBBBFBLLL
BFFFFFFLRL
FFFBFFFLRL
FBFBBFFLRL
BFFBFBFLRR
BBBFFFFRRR
FBFBBBFLLL
BFFBFBFRRL
BFFFFBFRLR
BFBBBFFLRL
FBBBFBFRRL
BFBBFBFLLR
BFBFBBBLRR
FFFBBBBLLR
FBFBBBBLRR
BFFBFFFLLR
BBFBBFFLRR
BBBBFBBRLR
FFFBBFBLLR
FFFBFBFLLL
BBFBBFFLRL
BFBBFFBRLL
BFBFFFBRRR
FFFBFBFLRR
FFFBBFFRLL
FFBBBBFRLL
BFBBBFFRRR
FBBFBBFRRL
BBFBBBFRLR
FBFBFBBLRL
FBFBFFFLLR
BFFFFBBRLL
BFFFBBBRRR
FBBFBFBRRR
FBFBFBBLRR
BFFBFFBLLL
FFBFFFBLLR
FBBBBBFRLL
FFFBBBFRRR
FFFBFFBRRL
BBFBBBBLLL
BBBBFBBLRL
BBFFFFBRLL
BFFFBBBRRL
FBBBFBFRLL
BFFBBFFRRR
BFFFFFBLRL
FBFBBFFLLR
BFBBBFBRRL
BBFBBFBRLR
BBBBFBFLLR
FBBBFBBRLR
FBFBFBFLRL
BBBFFBBRLR
BBBBBFFLLL
BFFBFBBRRL
BBFFBBFRLR
BFBBBBBLRR
FFBFFBFRRR
BFFFBBBLLR
BFFFBFBRRL
BFFFBFFLLR
FBBFBBFLRR
BBBFFFBRLR
BBBBFBBRRR
BFBFBFBRRR
BBBFBBBLLR
FBBFBFFRLL
BBBFBBFRRR
FFBFBBFRLL
BFFBFFBRLL
FBFBBFBLRL
BBBFBFBRRR
BFFFBBBRLR
BFFBFBFRRR
FFBFBFBRRR
BFBFBBBRLR
BBFFBFBLLR
FFBFFFFRRR
BFBBFFFLLL
BFFFFBBLRL
FBFFBFFLRR
BFFBFFFRLL
BBFBFFBRRL
FBBFFBFLRL
FBBFBFFLLL
FBFFFBFLRR
FBFBFFBRRR
FBBBBFFLLL
BFBFBBBRRR
BBFBFBFLLR
FFBBBFBRRL
BBFBFFBLLL
FBBBBFFRRR
FFFBFBBLRR
FFFBBBFRLR
BBBFFFBRRL
FFBBFBBLRR
FFBBFBFRLL
BBBFFFBRRR
BBFBBFFRLL
FBBFFBFLLL
FBFBBFFRLL
FFBBFBFRRR
BBBBFFBLLR
FBFFBBFLLL
FBFBBFBLLR
FFBBFFFRRR
BBBFBBFRLL
BFFBBFBRLL
FBBBBBBRLL
FBBFFFBRLR
FFBBBBBLRL
BFBBFBBLRL
BBFBFBFRLR
BFBFBBFLRR
FFBFBBFRRR
FFBFFFFLRL
BBFBFFBRRR
BBFBFBFLRL
FFBFFBBRLL
BBFFBFBLLL
BBFFBBBLLR
FBBFBFFLLR
FBBBBFBRLL
BBFFFFFLLL
BBFBFFFRRL
BBFFFBFRRR
BBBFBFFLLR
FFBBBFBLLR
FBFBBBBLLR
BBFFFFFRRL
FBFBFBFRLR
FFBFBBBRRL
FFFBBFFRRL
FFFBBBFLLL
BFBFFFFRLR
BFFBBBFRRL
BFFFBBFLLR
BFFBFFBRRL
BBFBBBBRLL
BBFBFBBRLL
BBFBBBBRLR
BFFFBBFRLR
FBBFFBBLRL
BBBBFBFRRL
BFFBFFBRRR
FFBBFFBLLR
FFBBBBFRLR
FBFFBBBLLR
FFBBFFBRRL
FBFBFFFRLR
BFFBFFBLLR
FBFFFBBLLL
BFBBFFFLRL
FFFBBFFRRR
BFBBFFFRLR
BFBFFBBRLL
BBFFFFBRRR
FBFFFFFLRL
BFFBBBFLRL
BFBBBFBLRR
FFBFFBBLLL
BFBFBBBRRL
FBBBFBBLLR
BFFFBFFRRL
FBBFFBBLLR
BBFFFFBLLR
BFBBFBFRLL
FBFBBBFLRL
BFFBFFFLLL
BBBBFBBRLL
BBBFBBFRLR
FBFFBBBRLL
FBFBBBFLLR
BFBBFFBRRL
FBBFFFFLRL
BFFBBBBRRL
FBFBFBFRLL
BFFBBBFLLR
FBFBFFBRRL
BBFBFBBRRR
FFFFBBBRLR
BBFFFBFRLR
FBBBFFFRLR
FBBBBFFLRR
BBFFFBFLRR
FBFBBFBRLL
BBFFFBBRRL
FFFBBBBLRL
BBFBBFBRLL
FBBBFFFRRL
BFBFBBBLRL
FFFBBBBRLL
BBFFFFFLRL
BBBBFBBLRR
BFBBBBBRRR
BBFFBFBRRR
BFFFBFBLRL
BFBFFBBLLL
BBFFFFFLLR
BFBBBFBRLR
FBFFBFBLRL
FFBFBFBLLR
FBBFBBBRRL
FBFBBBBRRL
BFBFBFFLLL
FBFFFFFRRR
BBFBBBFLRL
FFBFFFFRRL
BBFBFFBLRL
FFBFFFFLLR
FBFFBBBLLL
BBBBFBFRLR
BBBFFBBLLR
FFBBBBFLLL
FBBBBFBRRR
FBBBBBFRLR
FFFBBBFLRL
BBFFFBFLLL
FBFFBFBRLR
FFBBFBFLRL
FFFBBFFLLR
FFFBFFFRLR
BFBFFBBRRL
BBFFBFFRRR
FFFBFBBRRR
BFBFBFFLLR
FBBBFFBLRL
FFBBBBFRRL
BBFBFBBLRR
FFBBFFBRRR
BFBBBBFLRR
BFFBBBBLRR
FBBBBFFLRL
FBBFFFFRRL
FFBBFBFLRR
FFBBBFBRLL
FFFBFBFRRL
FFBBFFFLLL
FBBFBFFRRL
BBFFFBBRRR
BBBFFBFRLR
BFBFFBFRLL
FBBFFFBLLR
BFBBBBBRRL
BFBBFBFLLL
BBBFBFBRRL
FBFFFBBRLL
FBBFBFFRLR
BFFBBBFLLL
FFFBFBBRLL
BBBBFFFRRL
FBFBBFFLRR
BFFFFBBRRL
BBFBBFFRLR
FBFFBFFLLR
BBBFFBFLLL
BFBBBBBLRL
BFFFBFBLLL
BFBFBBBLLR
BBBFFFFLRR
FBBBBBFRRR
FBBFBFFRRR
BBFBFBFRRR
FFFBFFFLLL
FBFFBBBRRL
BBFBBBBLLR
FBFBFBBRRR
FFFBFBBLLL
FFBBBFFRRR
BBBFFFFRLR
BFBFFFFLLR
FBFFFFBRLL
FBBFFBFLRR
BFFBFFFRRL
BBFBFBBLRL
FFFBBFFLLL
BFBBFFBRRR
FFBBBBBLRR
BBBFFFBLLL
FFBFFFBLRR
FFFBFBFRRR
FFFBBFBLRR
FBFFBBFRLR
BFBBFFFLLR
BFFBFFBLRR
FBFFBBFRRR
FFBBFFBRLL
FBFBFBFLLR
FBBFBBFLLL
BFBBBBBRLL
FBFFBFBLLR
BFBBFBFLRL
BFBBBFFRRL
BBBFBFFRRL
FFBBBFFLRR
FBBBFFFRLL
FFFBBFBRLL
BFFBBFBRRL
BFBFBBFLLR
FFBFBBFRRL
FBBBBFFLLR
FFFBFFFRRR
BBBFFFBLLR
BBBFBBBLRR
BBFBBFBLLL
FFBBBFBLRR
BFBFFBFLRR
BFFBBFBLRL
BFBBFFBLLR
FBFFBBBRRR
BBBFBBFLRL
BFBFBFFRRL
BBBFBBBLRL
FBFBBBBRLL
BFFFFBFRRL
BFFFFFBRLL
BFFFFBFLRL
FBBFFBFRLL
BBBFBFBLLR
BBBFBBBRLR
BFFBFFFLRR
BFFBFBBLLR
FBFBBFFRRL
BBFBFBBLLR
BFFFFFBLLL
BFFBBFFLLR`

// Convert the string into an array with the split() method.
let entriesArr = entries.split('\n');

let rows = [];
for (i = 0; i < 128; i++) {
    rows[i] = i;
}

let columns = [];
for (i = 0; i < 8; i++) {
    columns[i] = i;
}

let rowSeat = [];
let columnSeat = [];

for (i =0; i < entriesArr.length; i++) {
    let row = rows;
    if (entriesArr[i][0] === 'F') {
        row = row.slice(0, 64);
        if (entriesArr[i][1] === 'F') {
            row = row.slice(0, 32);
            if (entriesArr[i][2] === 'F') {
                row = row.slice(0, 16);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            } else {
                row = row.slice(16, 32);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            }
        } else {
            row = row.slice(32, 64);
            if (entriesArr[i][2] === 'F') {
                row = row.slice(0, 16);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            } else {
                row = row.slice(16, 32);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            }
        }
    } else {
        row = row.slice(64, 128);
        if (entriesArr[i][1] === 'F') {
            row = row.slice(0, 32);
            if (entriesArr[i][2] === 'F') {
                row = row.slice(0, 16);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            } else {
                row = row.slice(16, 32);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            }
        } else {
            row = row.slice(32, 64);
            if (entriesArr[i][2] === 'F') {
                row = row.slice(0, 16);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            } else {
                row = row.slice(16, 32);
                if (entriesArr[i][3] === 'F') {
                    row = row.slice(0, 8);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                } else {
                    row = row.slice(8, 16);
                    if (entriesArr[i][4] === 'F') {
                        row = row.slice(0, 4);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    } else {
                        row = row.slice(4, 8);
                        if (entriesArr[i][5] === 'F') {
                            row = row.slice(0, 2);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        } else {
                            row = row.slice(2, 4);
                            if (entriesArr[i][6] === 'F') {
                                row = row.slice(0, 1);
                            } else {
                                row = row.slice(1, 2);
                            }
                        }
                    }
                }
            }
        }
    }
    rowSeat.push(row.toString());

    let column = columns;
    if (entriesArr[i][7] === 'L') {
        column = column.slice(0, 4);
        if (entriesArr[i][8] === 'L') {
            column = column.slice(0, 2);
            if (entriesArr[i][9] === 'L') {
                column = column.slice(0, 1);
            } else {
                column = column.slice(1, 2);
            }
        } else {
            column = column.slice(2, 4);
            if (entriesArr[i][9] === 'L') {
                column = column.slice(0, 1);
            } else {
                column = column.slice(1, 2);
            }
        }
    } else {
        column = column.slice(4, 8);
        if (entriesArr[i][8] === 'L') {
            column = column.slice(0, 2);
            if (entriesArr[i][9] === 'L') {
                column = column.slice(0, 1);
            } else {
                column = column.slice(1, 2);
            }
        } else {
            column = column.slice(2, 4);
            if (entriesArr[i][9] === 'L') {
                column = column.slice(0, 1);
            } else {
                column = column.slice(1, 2);
            }
        }
    }
    columnSeat.push(column.toString());
}

let seatID = [];

for (i = 0; i < entriesArr.length; i++) {
    seatID[i] = (Number(rowSeat[i]) * 8) + Number(columnSeat[i]);
}

let maxSeatID = Math.max(...seatID);
console.log('The highest seat ID on a boarding pass is ' + maxSeatID);

/*
 * DAY 5 (II)
 *
 * It's a completely full flight, so your seat should be the only missing boarding pass in your
 * list. However, there's a catch: some of the seats at the very front and back of the plane
 * don't exist on this aircraft, so they'll be missing from your list as well.
 * 
 * Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours
 * will be in your list.
 * 
 * What is the ID of your seat?
 */

// To sort into numerical rather than alphabetical order
seatID.sort((a, b) => a - b);

// As some of the seats at the very front don't exist => i = 1 to omit first result
for (i = 1; i < seatID.length; i++) {
    if ((seatID[i] - seatID[i - 1]) != 1) {
        console.log('The ID of my seat is ' + (seatID[i] - 1));
    }
}