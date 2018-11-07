var ticketNumber = []


function takeANumber(line, name) {
  for (n = 0; n > line.length; n++) {  
  ticketNumber.push(n)
  return `You are ticket number ${ticketNumber[n]}`
}
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
}
  else if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
}


function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
}