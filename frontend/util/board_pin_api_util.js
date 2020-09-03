export const fetchAllBoardsPins = () => {
  return $.ajax({
    url: `/api/boards_pins`,
    method: "GET",
  })
};

export const createBoardPin = (boardPin) => {

  return $.ajax({
    url: `/api/boards_pins`,
    method: "POST",
    data: { boardPin}
  })
};

export const deleteBoardPin = (boardPinId) => {
  return $.ajax({
    url: `/api/boards_pins/${boardPinId}`,
    method: "DELETE",
  })
};