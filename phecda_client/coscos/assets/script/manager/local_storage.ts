import { sys, _decorator } from 'cc';
export default class LoaclStorage {

    static removeStorage(key: string) {
        sys.localStorage.removeItem(key)
    }

    static setNumber(key: string, data: number) {
        try {
            sys.localStorage.setItem(key, data.toString());
        } catch (error) {
            console.warn(key, error)
        }
    }

    static getNumber(key: string, defaultValue?: number) {
        try {
            var value = sys.localStorage.getItem(key);
            if (value == null || value == "" || value == undefined) {
                if (defaultValue != null) {
                    return defaultValue;
                }
                return null;
            }
            return Number(value);
        } catch (error) {
            console.warn(key, error)
        }
    }

    static setJson(key: string, data: JSON) {
        try {
            sys.localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.warn(key, error)
        }
    }

    static getJson(key: string) {
        try {
            var str = sys.localStorage.getItem(key);
            return str;
        } catch (error) {
            console.warn(key, error)
        }
    }

    static setString(key: string, data: String) {
        try {
            sys.localStorage.setItem(key, data.toString());
        } catch (error) {
            console.warn(key, error)
        }
    }

    static getString(key: string, defaultValue?: string): string {
        try {
            var str = sys.localStorage.getItem(key);
            if (str == null || str == "") {
                if (defaultValue != null) {
                    return defaultValue;
                }
            }
            return str;
        } catch (error) {
            console.warn(key, error)
        }
    }

    static setItem(key: string, data: any) {
        try {
            sys.localStorage.setItem(key, data);
        } catch (error) {
            console.warn(key, error)
        }
    }

    static getItem(key: string): any {
        try {
            return sys.localStorage.getItem(key);
        } catch (error) {
            console.warn(key, error)
        }
    }

    static hasItem(key: string) {
        var str = sys.localStorage.getItem(key);
        return str != null;
    }
}

export enum StorageType{
    ResUrl = "ResUrl",
}