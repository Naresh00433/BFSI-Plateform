const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

class ApiClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  async patch<T>(url: string, body: unknown): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }
}

export const api = new ApiClient();