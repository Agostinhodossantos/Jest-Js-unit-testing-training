const FilterText = (text) => {
    text = !text ? "Unknown" : text
    text = text.trim()
    text = text.length > 8 ? text.substring(0, 8) : text
    text = text.startsWith("_") ? text.substring(1) : text
    return text
}

module.exports = FilterText