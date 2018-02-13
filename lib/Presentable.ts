import { Type } from './Type';

export function Presentable(cls: Type<any>) {
    return(target: any, key: string) => {

        var _val = target[key];

        var getter = function () {
            if(_val == null) {
                _val = new cls(this);
            }
            return _val;
        };

        var setter = function (newVal: any) { };

        if (delete target[key]) {
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}
