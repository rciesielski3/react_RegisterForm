# react_RegisterForm

A course-registration form for a programming school, built with React, `react-hook-form` and `zod`.

**Features**

- Personal data with schema validation (name and surname min. 3 characters, valid e-mail, 9-digit phone)
- Course preferences: mode (online / hybrid / stationary) and at least one technology
- CV upload restricted to JPEG/PNG, validated by file type
- Optional programming experience list (technology + level); the schema does not require rows when the box is checked (known gap, covered in the test plan)
- Validated data is shown in a modal after submit

**Run**

```bash
npm install
npm start     # dev server
npm test
npm run build
```

Originally a homework assignment (task description in Polish, removed from this README).
