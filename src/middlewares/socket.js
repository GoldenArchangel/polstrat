const socketMiddleware = socket => {
  // Socket param is the client.
  return ({ dispatch, getState }) => next => async action => {
    //console.log(action)

    // return next(action)

    if (typeof action === "function") {
      return action(dispatch, getState)
    }

    /*
     * Socket middleware usage.
     * promise: (socket) => socket.emit('MESSAGE', 'hello world!')
     * type: always 'SOCKET'
     * types: [REQUEST, SUCCESS, FAILURE]
     */
    const { promise, type, types, ...rest } = action

    if (type !== "SOCKET" || !promise) {
      // Move on! Not a socket request or a badly formed one.
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types
    next({ ...rest, type: REQUEST })

    try {
      const result = await promise(socket)

      if (SUCCESS) {
        return await next({ ...rest, result, type: SUCCESS })
      }
    } catch (error) {
      if (FAILURE) {
        return await next({ ...rest, error, type: FAILURE })
      }
    }
  }
}

export default socketMiddleware
