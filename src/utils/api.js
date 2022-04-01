export const request = (data, ms = 3000) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms))
