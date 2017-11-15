class DataError extends Error {}

export async function get(url) {
  const response = await fetch(url, {
    credentials: "include"
  });
  const data = await response.json();

  return data;
}

export async function post(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(data),
    credentials: "include"
  });
  return response.json();
}

export async function put(url, data){
  const response = await fetch(url, {
    method: 'PUT',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(data),
    credentials: "include"
  });
  if(!response.ok) {
    const data = await response.json();
    throw new DataError(data.error);
  }
  return response.json();
}