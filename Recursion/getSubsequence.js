
console.time("begin")
const get_subsequences = (the_string) => {
    if (the_string.length === 0) {
        return [""];
    }

    const char_at_1 = the_string.charAt(0);
    const res_of_substring = the_string.substring(1);

    const subsequences_without_first_char = get_subsequences(res_of_substring);

    const subsequences_with_first_char = subsequences_without_first_char.map((subsequence) => {
        return char_at_1 + subsequence;
    });

    return [...subsequences_without_first_char, ...subsequences_with_first_char];
}

const sub_sequences_of_string = get_subsequences("abc");
console.log(sub_sequences_of_string);
console.timeLog("begin")
console.timeEnd("begin");
// console.timeLog("end");
