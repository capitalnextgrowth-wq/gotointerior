export const PROJECT_TYPES = ["Residential", "Commercial", "Retail & Showroom", "Hospitality", "Modular Kitchen & Wardrobes"];
export const TIMELINES = ["Flexible", "Within 1 month", "1–3 months", "3–6 months"];
export const BUDGETS = ["Under ₹5 Lakh", "₹5 – 10 Lakh", "₹10 – 25 Lakh", "₹25 – 50 Lakh", "₹50 Lakh+"];

export const initialValues = {
  name: "", email: "", location: "",
  projectType: PROJECT_TYPES[0], timeline: TIMELINES[0], budget: BUDGETS[0], message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateField(key, raw) {
  const v = String(raw ?? "").trim();
  switch (key) {
    case "name":
      if (!v) return "Please enter your full name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (v.length > 80) return "Name is too long.";
      if (!/^[\p{L}\p{M}\s.'-]+$/u.test(v)) return "Name can only contain letters and spaces.";
      return undefined;
    case "email":
      if (!v) return "Please enter your email address.";
      if (!EMAIL_RE.test(v)) return "Enter a valid email, e.g. name@example.com.";
      return undefined;
    case "location":
      if (!v) return "Tell us where the project is located.";
      if (v.length < 2) return "Enter a city or area.";
      if (v.length > 120) return "Location is too long.";
      return undefined;
    case "projectType":
      return PROJECT_TYPES.includes(v) ? undefined : "Select a project type.";
    case "timeline":
      return TIMELINES.includes(v) ? undefined : "Select a timeline.";
    case "budget":
      return BUDGETS.includes(v) ? undefined : "Select a budget range.";
    case "message":
      if (!v) return "Tell us a little about your project.";
      if (v.length < 10) return "Add a few more details (at least 10 characters).";
      if (v.length > 1500) return "Message must be under 1500 characters.";
      return undefined;
    default:
      return undefined;
  }
}

export function validateAll(values) {
  const errors = {};
  Object.keys(values).forEach((k) => {
    const e = validateField(k, values[k]);
    if (e) errors[k] = e;
  });
  return errors;
}