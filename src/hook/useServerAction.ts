"use client";

import { useState } from "react";

export default function useServerAction(fn: any, payload: any) {
  const [state, setState] = useState({ data: null, loading: false });
  const fetch = async () => {
    try {
      setState({ data: null, loading: true });
      const res = await fn(payload);
      setState({ data: res, loading: false });
    } catch (error) {
      setState({ data: null, loading: false });
    }
  };
  const response: { fetch: () => Promise<void>; data: any; loading: boolean } =
    { fetch, data: state.data, loading: state.loading };
  return response;
}
