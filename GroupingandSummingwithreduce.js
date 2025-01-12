//GroupingandSummingwithreduce.js
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const categoryCounts = categories.reduce((counts, category) => {
    counts[category] = (counts[category] || 0) + 1;
    return counts;
}, {});

console.log(categoryCounts);
