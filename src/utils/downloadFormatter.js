export function removeDuplicate (a, b) {
  if (a.indexOf(b) < 0) {
    a.push(b)
  }
  return a
}

export const groupData = (data, transformer) => {
  return data.reduce((date, current) => {
    if (date.indexOf(transformer(current.day)) < 0) {
      date.push(transformer(current.day))
    }
    return date
  }, [])
    .map((date) => {
      return {
        date: date,
        downloads: data.filter(el => transformer(el.day) === date)
          .map(el => el.downloads)
          .reduce((total, download) => total + download)
      }
    })
    .map(element => element.downloads)
}
