export function handleError({ error: { stack } }) {
  return {
    stack,
  };
}
