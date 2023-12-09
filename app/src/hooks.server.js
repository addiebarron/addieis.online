export function handleError({ event, error }) {
  return {
    stack: error.stack,
  };
}
