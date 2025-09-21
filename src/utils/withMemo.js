import { memo } from 'react';

// HOC to wrap components with React.memo with optional comparison function
export const withMemo = (Component, propsAreEqual = null) => {
  const displayName = Component.displayName || Component.name || 'Component';
  const WrappedComponent = memo(Component, propsAreEqual);
  WrappedComponent.displayName = `Memo(${displayName})`;
  return WrappedComponent;
};

// Default comparison function for common scenarios
export const defaultPropsAreEqual = (prevProps, nextProps) => {
  const prevKeys = Object.keys(prevProps);
  const nextKeys = Object.keys(nextProps);

  if (prevKeys.length !== nextKeys.length) return false;

  return prevKeys.every(key => {
    if (typeof prevProps[key] === 'function') return true; // Skip function comparisons
    return prevProps[key] === nextProps[key];
  });
};
