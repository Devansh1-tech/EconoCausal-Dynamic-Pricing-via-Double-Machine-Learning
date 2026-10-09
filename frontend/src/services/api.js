export const API_BASE = '/api';

export async function fetchHealth() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('API not healthy');
  return res.json();
}

export async function fetchMetadata() {
  const res = await fetch(`${API_BASE}/metadata`);
  if (!res.ok) throw new Error('Failed to fetch metadata');
  return res.json();
}

export async function fetchPrediction(payloads) {
  const res = await fetch(`${API_BASE}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payloads)
  });
  if (!res.ok) throw new Error('Failed to fetch prediction');
  return res.json();
}

export async function fetchSegment(payloads) {
  const res = await fetch(`${API_BASE}/segment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payloads)
  });
  if (!res.ok) throw new Error('Failed to fetch segment');
  return res.json();
}

export async function fetchRecommendation(payloads) {
  const res = await fetch(`${API_BASE}/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payloads)
  });
  if (!res.ok) throw new Error('Failed to fetch recommendation');
  return res.json();
}
