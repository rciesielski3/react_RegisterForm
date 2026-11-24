# react_RegisterForm

A course-registration form for a programming school, built with React, `react-hook-form` and `zod`.

**Features**

- Personal data with schema validation (name and surname min. 3 characters, valid e-mail, 9-digit phone)
- Course preferences: mode (on-site / online) and at least one technology
- CV upload restricted to JPEG/PNG, validated by file type
- Optional programming experience list (technology + level); required to be non-empty when the box is checked
- Validated data is shown in a modal after submit

**Run**

```bash
npm install
npm start     # dev server
npm test
npm run build
```

Originally a homework assignment (task description in Polish, removed from this README).
