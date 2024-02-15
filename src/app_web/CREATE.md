# CREATE

## How was this template created?

By running the following command

```sh
npm create vite@latest
```

and following the below instructions:

```
Need to install the following packages:
  create-vite@5.2.0
Ok to proceed? (y) y
✔ Project name: … app_web
✔ Select a framework: › React
✔ Select a variant: › JavaScript + SWC
```

## Environment

Create a copy of file `example.env` with name `.env`

## How were dependencies installed?

```sh
npm install
```

## Dependencies

Explaination on why additional dependencies were installed

### Prettier

Added to format code for better readability and more consistent commits

### luxon

A nice library to manipulating and formatting with date time. Used because the in-built Date class doesn't have good APIs.

### pino

A very flexible logging library that should be used instead of in-built console;

### Joi

For validating anything, in this case used to validate things like env variables or where something isn't part of a form

### react-hook-form

For form validations

### Tailwindcss

For theming

### Flowbite

For tailwindcss based components
