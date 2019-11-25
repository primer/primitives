"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_json_1 = __importDefault(require("../primitives/colors.json"));
const spacing_json_1 = __importDefault(require("../primitives/spacing.json"));
const typography_json_1 = require("../primitives/typography.json");
exports.theme = {
    colors: colors_json_1.default,
    space: spacing_json_1.default,
    fontSizes: typography_json_1.fontSizes,
    lineHeights: typography_json_1.lineHeights
};
