export function isNullOrUndefined(arg) {
  return arg === null || arg === undefined;
}

export function getConstructor(arg) {
  return !isNullOrUndefined(arg) && arg.constructor;
}

export function isString(arg) {
  return getConstructor(arg) === String;
}

export function isObject(arg) {
  return getConstructor(arg) === Object;
}

export function isArray(arg) {
  return Array.isArray(arg);
}

export function isEmptyString(arg) {
  return isString(arg) && arg.length === 0;
}

export function isEmptyArray(arg) {
  return isArray(arg) && arg.length === 0;
}

export function isEmptyObject(arg) {
  return isObject(arg) && Object.keys(arg).length === 0;
}

export function isEmpty(arg) {
  return isNullOrUndefined(arg) || isEmptyString(arg) || isEmptyArray(arg) || isEmptyObject(arg);
}
