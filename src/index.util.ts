function itType(val: any) {
  return Object.prototype.toString.call(val).replace(/^\[[^\s\]]+\s*([^\s\]]+)]$/, '$1')
}

function isUndef(val: any) {
  if (val === undefined) {
    return true
  }
  return false
}

function isArray(arr: any) {
  if (itType(arr) === 'Array') {
    return true
  }
  return false
}

function isObject(obj: any) {
  if (itType(obj) === 'Object') {
    return true
  }
  return false
}

function isString(str: any) {
  if (itType(str) === 'String') {
    return true
  }
  return false
}

function isNumber(num: any) {
  if (itType(num) === 'Number') {
    return true
  }
  return false
}

function isBoolean(num: any) {
  if (itType(num) === 'Boolean') {
    return true
  }
  return false
}

function isFunction(num: any) {
  if (itType(num) === 'Function') {
    return true
  }
  return false
}

function isNotEmpty(val: any) {
  if (isArray(val)) {
    return val.length > 0
  }
  if (isObject(val)) {
    return Object.keys(val).length > 0
  }
  return false
}

export {
  itType,
  isUndef,
  isArray,
  isObject,
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isNotEmpty
}

export default {
  itType,
  isUndef,
  isArray,
  isObject,
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isNotEmpty
}
