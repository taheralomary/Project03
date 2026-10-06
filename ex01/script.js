// Returns "A", "B", "C", "D", "F", or "Invalid"
function calculateGrade(score) {
  // Validation: must be a real number (NaN is the only value not equal to itself) from 0 to 100
  if (typeof score === "number" && score === score && score >= 0 && score <= 100) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  } else {
    return "Invalid";
  }
}

// Returns true only for a valid adult with a ticket
function checkAccess(age, hasTicket) {
  // Step 1: reject bad input
  if (typeof age !== "number") {
    return false;
  }
  if (typeof hasTicket !== "boolean") {
    return false;
  }

  // Step 2: apply the rule
  if (hasTicket === true && age >= 18) {
    return true;
  }
  return false;
}

// ---- Tests: calculateGrade ----
console.log("--- calculateGrade ---");
console.log("100       ->", calculateGrade(100));      // A
console.log("90        ->", calculateGrade(90));       // A
console.log("89        ->", calculateGrade(89));       // B
console.log("80        ->", calculateGrade(80));       // B
console.log("79        ->", calculateGrade(79));       // C
console.log("70        ->", calculateGrade(70));       // C
console.log("69        ->", calculateGrade(69));       // D
console.log("60        ->", calculateGrade(60));       // D
console.log("59        ->", calculateGrade(59));       // F
console.log("0         ->", calculateGrade(0));        // F
console.log("-1        ->", calculateGrade(-1));       // Invalid
console.log("101       ->", calculateGrade(101));      // Invalid
console.log('"90"      ->', calculateGrade("90"));     // Invalid
console.log("NaN       ->", calculateGrade(NaN));      // Invalid
console.log("undefined ->", calculateGrade(undefined));// Invalid
console.log("null      ->", calculateGrade(null));     // Invalid

// ---- Tests: checkAccess ----
console.log("--- checkAccess ---");
console.log("(18, true)      ->", checkAccess(18, true));      // true
console.log("(17, true)      ->", checkAccess(17, true));      // false
console.log("(30, false)     ->", checkAccess(30, false));     // false
console.log("(0, true)       ->", checkAccess(0, true));       // false
console.log("(120, true)     ->", checkAccess(120, true));     // true
console.log("(-5, true)      ->", checkAccess(-5, true));      // false
console.log("(121, true)     ->", checkAccess(121, true));     // false
console.log('("25", true)    ->', checkAccess("25", true));    // false
console.log('(25, "yes")     ->', checkAccess(25, "yes"));     // false
console.log("(NaN, true)     ->", checkAccess(NaN, true));     // false
console.log("(undefined, ..) ->", checkAccess(undefined, true));// false