// Not in use...
export const filterSort = data => {
  return (
    data &&
    data.sort((a, b) => {
      let optionA
      let optionB

      if (sortFilters === "dateDesc" || sortFilters === "dateAsc") {
        optionA = a.createdAt
        optionB = b.createdAt
      } else {
        optionA = a.recipient.displayName.toUpperCase()
        optionB = b.recipient.displayName.toUpperCase()
      }

      if (sortFilters === "dateAsc" || sortFilters === "nameAsc") {
        return optionA < optionB ? -1 : optionA > optionB ? 1 : 0
      } else {
        return optionA > optionB ? -1 : optionA < optionB ? 1 : 0
      }
    })
  )
}
