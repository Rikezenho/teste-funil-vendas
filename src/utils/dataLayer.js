export const pushToDataLayer = (event, data = {}) => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.dataLayer.push({
    event,
    data,
  });
};
