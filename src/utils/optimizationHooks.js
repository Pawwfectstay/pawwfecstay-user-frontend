import { useMemo, useCallback } from 'react';

// Hook for memoizing filtered data
export const useFilteredData = (data, filters) => {
  return useMemo(() => {
    if (!data || !filters) return data;

    return data.filter(item => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return item[key]?.toString().toLowerCase().includes(value.toLowerCase());
      });
    });
  }, [data, filters]);
};

// Hook for memoizing sorted data
export const useSortedData = (data, sortConfig) => {
  return useMemo(() => {
    if (!data || !sortConfig) return data;

    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);
};

// Hook for memoizing event handlers
export const useEventCallback = (handler, dependencies) => {
  return useCallback((...args) => {
    handler(...args);
  }, dependencies);
};

// Hook for memoizing expensive calculations
export const useExpensiveCalculation = (calculation, dependencies) => {
  return useMemo(() => calculation(), dependencies);
};
