import { isValidEmail } from "@/utils/validators";

describe("Email Validation", () => {
  test("valid emails", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co")).toBe(true);
    expect(isValidEmail("hello123@sub.domain.org")).toBe(true);
  });

  test("invalid emails", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
    expect(isValidEmail("user@domain")).toBe(false);
    expect(isValidEmail("user@.com")).toBe(false);
    expect(isValidEmail("@domain.com")).toBe(false);
    expect(isValidEmail("user@domain,com")).toBe(false);
  });
});
