function calculateSavings(tool, plan) {
  let savings = 0;

  if (tool === "ChatGPT" && plan === "Team") {
    savings = 20;
  }

  if (tool === "ChatGPT" && plan === "Enterprise") {
    savings = 100;
  }

  if (tool === "Cursor" && plan === "Business") {
    savings = 15;
  }

  if (tool === "Claude" && plan === "Team") {
    savings = 25;
  }

  return savings;
}

test("ChatGPT Team plan saves $20", () => {
  expect(calculateSavings("ChatGPT", "Team")).toBe(20);
});

test("ChatGPT Enterprise saves $100", () => {
  expect(calculateSavings("ChatGPT", "Enterprise")).toBe(100);
});

test("Cursor Business saves $15", () => {
  expect(calculateSavings("Cursor", "Business")).toBe(15);
});

test("Claude Team saves $25", () => {
  expect(calculateSavings("Claude", "Team")).toBe(25);
});

test("Unknown plan returns $0", () => {
  expect(calculateSavings("Gemini", "Free")).toBe(0);
});