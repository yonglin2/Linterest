export const fetchSingleBoard = (boardId) => {
  return $.ajax({
    method: 'GET',
    url: `api/boards/${boardId}`
  });
};

export const createBoard = (board) => {
  return $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: { board }
  });
};

export const deleteBoard = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/boards/${id}`
  })
);
