function isPalindrome(s: string): boolean {
    let replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverse = replaced.split("").reverse().join("");
    console.log({replaced, reverse})
    console.log(replaced === reverse)
    return replaced === reverse;
};

isPalindrome('A man, a plan, a canal: Panama')
isPalindrome('race a car')
isPalindrome('" "')
isPalindrome('sabbas')