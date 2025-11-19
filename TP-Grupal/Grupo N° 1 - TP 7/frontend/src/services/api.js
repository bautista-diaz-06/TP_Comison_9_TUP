const BASE_URL = 'http://localhost:3000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Request failed');
  }

  const contentType = res.headers.get('content-type') || '';
  return contentType.includes('application/json') ? res.json() : res.text();
}

export function get(path) { return request(path); }
export function post(path, body) { return request(path, { method: 'POST', body: JSON.stringify(body) }); }
export function put(path, body) { return request(path, { method: 'PUT', body: JSON.stringify(body) }); }
export function del(path) { return request(path, { method: 'DELETE' }); }

export { BASE_URL };
