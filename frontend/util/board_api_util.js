export const fetchBoard = (boardId) => {
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

export const deleteBoard = (boardId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/boards/${boardId}`
  })
);
