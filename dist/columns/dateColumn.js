"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateColumn = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const DateComponent = react_1.default.memo(({ focus, active, rowData, setRowData }) => {
    var _a;
    const ref = (0, react_1.useRef)(null);
    // This is the same trick as in `textColumn`
    (0, react_1.useLayoutEffect)(() => {
        var _a, _b;
        if (focus) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
        }
        else {
            (_b = ref.current) === null || _b === void 0 ? void 0 : _b.blur();
        }
    }, [focus]);
    return (react_1.default.createElement("input", { className: (0, classnames_1.default)('dsg-input', !active && 'dsg-hide-date-picker'), type: "date", 
        // Important to prevent any undesired "tabbing"
        tabIndex: -1, max: "9999-12-31", ref: ref, 
        // The `pointerEvents` trick is the same than in `textColumn`
        // Only show the calendar symbol on non-empty cells, or when cell is active, otherwise set opacity to 0
        style: {
            pointerEvents: focus ? 'auto' : 'none',
            opacity: rowData || active ? undefined : 0,
        }, 
        // Because rowData is a Date object and we need a string, we use toISOString...
        value: (_a = rowData === null || rowData === void 0 ? void 0 : rowData.toISOString().substr(0, 10)) !== null && _a !== void 0 ? _a : '', 
        // ...and the input returns a string that should be converted into a Date object
        onChange: (e) => {
            const date = new Date(e.target.value);
            setRowData(isNaN(date.getTime()) ? null : date);
        } }));
});
DateComponent.displayName = 'DateComponent';
exports.dateColumn = {
    component: DateComponent,
    deleteValue: () => null,
    // We convert the date to a string for copying using toISOString
    copyValue: ({ rowData }) => rowData ? rowData.toISOString().substr(0, 10) : null,
    // Because the Date constructor works using iso format, we can use it to parse ISO string back to a Date object
    pasteValue: ({ value }) => {
        const date = new Date(value.replace(/\.\s?|\//g, '-'));
        return isNaN(date.getTime()) ? null : date;
    },
    minWidth: 170,
    isCellEmpty: ({ rowData }) => !rowData,
};
//# sourceMappingURL=dateColumn.js.map