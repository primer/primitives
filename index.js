"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_json_1 = __importDefault(require("./primitives/colors.json"));
exports.colors = colors_json_1.default;
const spacing_json_1 = __importDefault(require("./primitives/spacing.json"));
exports.spacing = spacing_json_1.default;
const typography_json_1 = __importDefault(require("./primitives/typography.json"));
exports.typography = typography_json_1.default;
const theme_1 = require("./theme");
exports.theme = theme_1.theme;
