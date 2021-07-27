const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((current, next) => {
    const [firstTag] = current
    const [secontTag] = next
    return firstTag.localeCompare(secontTag)
  })

  return newTags
}

export default setupTags
