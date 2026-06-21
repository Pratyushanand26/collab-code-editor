import { create } from "zustand";
import { ExecutionResult } from "../types";

interface ExecutionState {
  output: ExecutionResult | null;
  isLoading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setOutput: (output: ExecutionResult | null) => void;
  setError: (error: string | null) => void;
}

export const useExecutionStore = create<ExecutionState>((set) => ({
  output: null, isLoading: false, error: null,
  setLoading: (isLoading) => set({ isLoading }),
  setOutput: (output) => set({ output }),
  setError: (error) => set({ error }),
}));
