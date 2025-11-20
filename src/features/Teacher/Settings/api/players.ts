const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL ?? "";

type ApiError = {
  message?: string;
};

const withBaseUrl = (path: string) =>
  API_BASE_URL ? `${API_BASE_URL}${path}` : path;

async function handleResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  const data = text ? (JSON.parse(text) as T | ApiError) : null;

  if (!response.ok) {
    const message =
      (data as ApiError)?.message ??
      `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return (data as T) ?? ({} as T);
}

export type CreatePlayerPayload = {
  fullName: string;
  attendanceNumber: string;
  className: string;
  obstacle: string;
  email?: string;
  password?: string;
  avatar?: string;
};

export type CreatePlayerResponse = {
  id: string;
  [key: string]: unknown;
};

export async function createPlayer(
  payload: CreatePlayerPayload,
): Promise<CreatePlayerResponse> {
  const response = await fetch(
    withBaseUrl("/api/teacher/settings/players"),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  return handleResponse<CreatePlayerResponse>(response);
}

export type UploadPlayerFacePayload = {
  playerId: string;
  imageData: string;
};

export async function uploadPlayerFace(
  payload: UploadPlayerFacePayload,
): Promise<void> {
  const response = await fetch(
    withBaseUrl(`/api/teacher/settings/players/${payload.playerId}/face`),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ image: payload.imageData }),
    },
  );

  await handleResponse(response);
}

