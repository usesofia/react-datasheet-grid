"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticDataSheetGrid = void 0;
const react_1 = require("react");
const DataSheetGrid_1 = require("./DataSheetGrid");
const react_2 = __importDefault(require("react"));
exports.StaticDataSheetGrid = react_2.default.forwardRef((_a, ref) => {
    var { columns, gutterColumn, stickyRightColumn, addRowsComponent, createRow, duplicateRow, style, rowKey, onFocus, onBlur, onActiveCellChange, onSelectionChange, rowClassName, rowHeight } = _a, rest = __rest(_a, ["columns", "gutterColumn", "stickyRightColumn", "addRowsComponent", "createRow", "duplicateRow", "style", "rowKey", "onFocus", "onBlur", "onActiveCellChange", "onSelectionChange", "rowClassName", "rowHeight"]);
    const [staticProps] = (0, react_1.useState)({
        columns,
        gutterColumn,
        stickyRightColumn,
        addRowsComponent,
        createRow,
        duplicateRow,
        style,
        rowKey,
        onFocus,
        onBlur,
        onActiveCellChange,
        onSelectionChange,
        rowClassName,
        rowHeight,
    });
    return (react_2.default.createElement(DataSheetGrid_1.DataSheetGrid, Object.assign({}, staticProps, rest, { rowHeight: typeof rowHeight === 'number' ? rowHeight : staticProps.rowHeight, ref: ref })));
});
//# sourceMappingURL=StaticDataSheetGrid.js.map