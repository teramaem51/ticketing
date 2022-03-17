export const natsWrapper = {
  'client': {
    'publish': (suject: string, data: string, callback: () => void) => {
      callback();
    }
  }
};
