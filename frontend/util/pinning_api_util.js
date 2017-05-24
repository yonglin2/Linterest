export const createPinning = ( pinning ) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pinnings',
    data: { pinning }
  });
};
