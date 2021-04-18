export const objectIsEmpty = obj => {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

export const capitalize = word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

export const checkAllFields = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "undefined") {
      if (Array.isArray(arr[i]) && arr[i].length < 1) {
        return false
      }
      return true
    }
  }
  return false
}
