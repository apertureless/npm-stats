import {dateToYear} from './dateFormatter'

export function removeDuplicate (a, b) {
  if (a.indexOf(b) < 0) {
    a.push(b)
  }
  return a
}

export const getDownloadsPerYear = (data) => {
  return data.reduce((date, current) => {
    if (date.indexOf(dateToYear(current.day)) < 0) {
      date.push(dateToYear(current.day))
    }
    return date
  }, [])
    .map((date) => {
      return {
        date: date,
        downloads: data.filter(el => dateToYear(el.day) === date)
          .map(el => el.downloads)
          .reduce((total, download) => total + download)
      }
    })
    .map(element => element.downloads)
}
