import {
  STRING_SANITIZE_REGEX,
  STRING_SANITIZE_SPACES_REGEX,
} from "../localization";

export const sanitizeString = (str: string | undefined) =>
  str?.replace(STRING_SANITIZE_REGEX, "").trim();

export const toSlug = (str: string | undefined) =>
  sanitizeString(str)?.toLowerCase().replace(STRING_SANITIZE_SPACES_REGEX, "-");
