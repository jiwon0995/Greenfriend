// Date 함수 ex) 2022-01-03
export function getDate(myDate) { 
  const date = new Date(myDate)
  const year = date.getFullYear()
  const month = String(date.getMonth()+1).padStart(2,"0")
  const day = String(date.getDate()).padStart(2,"0")

  return `${year}-${month}-${day}`

}