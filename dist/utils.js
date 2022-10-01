function itType(val) {
  return Object.prototype.toString.call(val).replace(/^\[[^\s\]]+\s*([^\s\]]+)]$/, '$1')
}

function isUndef(val) {
  if (val === undefined) {
    return true
  }
  return false
}

function isArray(arr) {
  if (itType(arr) === 'Array') {
    return true
  }
  return false
}

function isObject(obj) {
  if (itType(obj) === 'Object') {
    return true
  }
  return false
}

function isString(str) {
  if (itType(str) === 'String') {
    return true
  }
  return false
}

function isNumber(num) {
  if (itType(num) === 'Number') {
    return true
  }
  return false
}

function isBoolean(num) {
  if (itType(num) === 'Boolean') {
    return true
  }
  return false
}

function isFunction(num) {
  if (itType(num) === 'Function') {
    return true
  }
  return false
}

function isNotEmpty(val) {
  if (isArray(val)) {
    return val.length > 0
  }
  if (isObject(val)) {
    return Object.keys(val).length > 0
  }
  return false
}

function toDeepClone(source, ...reset) {
  function keys(own) {
    if (isObject(own)) {
      return Object.keys(own)
    }
    if (isArray(own)) {
      return own.keys()
    }
    return []
  }
  function clone(i, o) {
    for (const key of keys(o)) {
      const iIsArray = isArray(i[key])
      const oIsArray = isArray(o[key])
      const iIsObject = isObject(i[key])
      const oIsObject = isObject(o[key])
      const ioIsArray = iIsArray && oIsArray
      const ioIsObject = iIsObject && oIsObject
      if (ioIsArray || ioIsObject) {
        clone(i[key], o[key])
      } else if (oIsArray) {
        if (i[key] === undefined) {
          i[key] = []
          clone(i[key], o[key])
        }
      } else if (oIsObject) {
        if (i[key] === undefined) {
          i[key] = {}
          clone(i[key], o[key])
        }
      } else {
        i[key] = o[key]
      }
    }
  }
  let inData
  let inArgs
  if (!isObject(source) && !isArray(source)) {
    return source
  } else if (isObject(source)) {
    inData = {}
    inArgs = [source, ...reset]
  } else if (isArray(source)) {
    inData = []
    inArgs = [source, ...reset]
  }
  for (const onData of inArgs) {
    const iIsArray = isArray(inData)
    const oIsArray = isArray(onData)
    const iIsObject = isObject(inData)
    const oIsObject = isObject(onData)
    const ioIsArray = iIsArray && oIsArray
    const ioIsObject = iIsObject && oIsObject
    if (ioIsArray) {
      clone(inData, onData)
    }
    if (ioIsObject) {
      clone(inData, onData)
    }
  }
  return inData
}

function toDebounce(func, wait, options) {
  let result
  let timerId
  let lastArgs
  let lastThis
  let lastCallTime = 0
  let lastInvokeTime = 0
  let leading = false
  let maxWait = false
  let trailing = true

  if (!isFunction(func)) {
    throw new TypeError('#<' + itType(func) + '> is not a function')
  }

  wait = +wait || 0

  if (isObject(options)) {
    leading = isBoolean(options.leading) ? options.leading : leading
    maxWait = isNumber(options.maxWait, true) ? Math.max(+options.maxWait || 0, wait) : false
    trailing = isBoolean(options.trailing) ? options.trailing : trailing
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    return (
      lastCallTime === 0 ||
      timeSinceLastCall < 0 ||
      timeSinceLastCall >= wait ||
      (maxWait !== false && timeSinceLastInvoke >= maxWait)
    )
  }
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const callTime = Math.max(wait - timeSinceLastCall, 0)
    const invokeTime = Math.max(maxWait - timeSinceLastInvoke, 0)
    return maxWait === false ? callTime : Math.min(callTime, invokeTime)
  }
  function leadingEdge(time) {
    if (leading) {
      return invokeFunc(time)
    }
    lastInvokeTime = time
    timerId = setTimeout(timerExpired, wait)
    return result
  }
  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    timerId = setTimeout(timerExpired, remainingWait(time))
  }
  function trailingEdge(time) {
    timerId = undefined
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }
  function invokeFunc(time) {
    const args = lastArgs
    const context = lastThis
    lastInvokeTime = time
    lastArgs = lastThis = undefined
    result = func.apply(context, args)
    return result
  }

  function cancel() {
    if (!isUndef(timerId)) {
      clearTimeout(timerId)
    }
    lastCallTime = lastInvokeTime = 0
    lastArgs = lastThis = timerId = undefined
  }
  function flush() {
    return isUndef(timerId) ? result : trailingEdge(Date.now())
  }

  function toDebounced(...reset) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastThis = this
    lastArgs = reset
    lastCallTime = time

    if (isInvoking) {
      return isUndef(timerId) ? leadingEdge(lastCallTime) : invokeFunc(lastCallTime)
    }
    if (isUndef(timerId)) {
      timerId = setTimeout(timerExpired, wait)
    }

    return result
  }

  toDebounced.cancel = cancel
  toDebounced.flush = flush

  return toDebounced
}

function toThrottle(func, wait, options) {
  let leading = true
  let trailing = true

  if (!isFunction(func)) {
    throw new TypeError('#<' + itType(func) + '> is not a function')
  }
  if (isObject(options)) {
    leading = isBoolean(options.leading) ? options.leading : leading
    trailing = isBoolean(options.trailing) ? options.trailing : trailing
  }

  return toDebounce(func, wait, {
    maxWait: wait,
    leading: leading,
    trailing: trailing
  })
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
  isNotEmpty,
  toDeepClone,
  toDebounce,
  toThrottle
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
  isNotEmpty,
  toDeepClone,
  toDebounce,
  toThrottle
}
