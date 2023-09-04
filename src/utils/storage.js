

/**
 * Loads a string from storage.
 */
export const loadString = async () => {
  try {
    return await localStorage.getItem();
  } catch {
    return null;
  }
};

/**
 * Saves a string to storage.
 */
export const saveString = async () => {
  try {
    await localStorage.setItem();
    return true;
  } catch {
    return false;
  }
};

/**
 * Loads something from storage and runs it thru JSON.parse.
 */
export const getItemFromStorage = async key => {
  try {
    const loadParse = await localStorage.getItem(key);
    return JSON.parse(loadParse);
  } catch {
    return null;
  }
};

/**
 * Saves an object to storage.
 */
export const saveItemToStorage = async (key, value) => {
  try {
     localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

/**
 * Removes something from storage.
 */
export const remove = async key => {
  try {
     localStorage.removeItem(key);
  } catch {}
};

/**
 * clear the storage.
 */
export const clear = async () => {
  try {
     localStorage.clear();
  } catch {}
};
