interface StorageProxy {
  setItem: (key: string, value: any) => void
  getItem: (key: string) => any
  removeItem: (key: string) => void
  clear: () => void
}

class sessionStorageProxy implements StorageProxy {
  public storage: StorageProxy
  constructor(storageMode: StorageProxy) {
    this.storage = storageMode
  }

  setItem(key: string, value: any) {
    if (value === undefined)
      throw new Error("Please provide a valid value to set in the storage")
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    const value: string = this.storage.getItem(key)
    if (!value) return
    return JSON.parse(this.storage.getItem(key))
  }

  removeItem(key: string) {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }
}

class localStorageProxy extends sessionStorageProxy {
  constructor(storageMode: StorageProxy) {
    super(localStorage)
  }
}
const storageSession = new sessionStorageProxy(sessionStorage)
const storageLocal = new localStorageProxy(localStorage)
export { storageSession, storageLocal }
