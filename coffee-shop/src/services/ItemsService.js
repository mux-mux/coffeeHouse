const getItems = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Access-Key': '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq',
      'X-JSON-Path': '$.items[*]',
      'X-Bin-Meta': false,
    },
  });

  return await res.json();
};

export { getItems };
