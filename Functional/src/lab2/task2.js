const Logic = (a) => ({
    and: (b) => Boolean(a) && Boolean(b),
    or: (b) => Boolean(a) || Boolean(b),
    xor: (b) => Boolean(a ^ b),
    not: () => !a,
    implication: (b) => a <= b,
    equals: (b) => Boolean(a) === Boolean(b),
});
