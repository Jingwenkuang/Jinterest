export const fetchAllPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins'
  })
)

export const fetchPin = (pinId) => (
  $.ajax({
    method: 'GET', 
    url: `/api/pins/${pinId}`
  })
)

export const createPin = (pin) => (
  $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: pin,
    contentType: false,
    processData: false 
  })
)

export const updatePin = (pin) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: { pin }
  })
)

export const deletePin = (pinId) => {

 return $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
}

export const saveToBoard = (boardPin) => {
  return $.ajax({
    url: `/api/boards_pins`,
    method: "POST",
    data: { boardPin }
  })
}