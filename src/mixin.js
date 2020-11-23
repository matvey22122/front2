export const adaptiveWidthMobile = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vw - 320px) / (375 - 320)))`
}

export const adaptiveHeightMobile = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vh - 568px) / (812 - 568)))`
}

export const adaptiveWidthWeb = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vw - 800px) / (1920 - 800)))`
}

export const adaptiveHeightWeb = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vh - 700px) / (1080 - 700)))`
}

export const getToday = () => {
  const date = new Date();
  const d = Intl.DateTimeFormat('en', {day: 'numeric'}).format(date)
  const m = Intl.DateTimeFormat('en', {month: 'long'}).format(date)
  const ye = Intl.DateTimeFormat('en', {year: 'numeric'}).format(date)

  return `${d} ${m} ${ye}`;
}
