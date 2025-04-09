import { _decorator } from 'cc';
export default class MemoryStorage {

    private static m_map: any = {}

    static setKeyValue(key: string, data: any) {
        this.m_map[key] = data
    }

    static getValue(key: string) {
        return this.m_map[key]
    }

    static setJson(key: string, data: any) {
        try {
            this.setKeyValue(key, JSON.stringify(data));
        } catch (error) {
            console.warn(key, error)
        }
    }

    static getJson(key: string) {
        try {
            var str = this.getValue(key)
            if (str == null || str == "") {
                return null;
            }
            var data = JSON.parse(str);
            return data;
        } catch (error) {
            console.warn(key, error)
        }
    }
}