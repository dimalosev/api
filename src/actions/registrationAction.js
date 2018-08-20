export const registration = (username) => {
    return {
        type: "REGISTRATION_DATA",
        payload: username
    }
};

export const authentication = (val) => {
  return {
      type: "AUTHENTICATION",
      payload: val
  }
};

export const logout = () => {
    return {
        type: "LOG_OUT"
    }
};