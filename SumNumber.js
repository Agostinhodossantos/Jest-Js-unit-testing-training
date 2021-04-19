const SumNumber = (...Numbers) => {
    return Numbers.reduce((prev, curr) => prev + curr, 0)
}

module.exports = SumNumber