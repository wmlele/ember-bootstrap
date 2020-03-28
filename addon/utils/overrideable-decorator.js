export default function overrideable(target, key, descriptor) {
  // @todo add assertions
  let { get: originalGet } = descriptor;

  return {
    ...descriptor,
    get() {
      let overridden = this[`__${key}`];
      return overridden || originalGet.call(this);
    },
    set(value) {
      this[`__${key}`] = value;
    }
  };
}
