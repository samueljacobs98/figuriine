# FIGURiiNE

## A LEGO figure builder by [Samuel Jacobs](https://github.com/samueljacobs98)

**FIGURiiNE** is a web application built with React, TypeScript, Next.js, Three.js, and React Three Fiber. Leva has been used for the controls and Clerk Authentication for user authentication. With FIGURiiNE, users can sign in and customise their own 3D Lego figures.

[Deployed Site](https://figuriine.vercel.app/)

## Features

- **User Authentication**: Securely sign in to access customisation features.
- **3D Customisation**: Personalise your LEGO figure figure in an interactive 3D space.
- **Responsive Design**: Built with modern web standards for a seamless experience on any device.
- **Performance**: Optimised for performance using DRACO compressed models.
- **Vercel Build Pipeline**: Deployed on Vercel with a CI/CD pipeline.

## Upcoming Features/TODOs

- **Unit & Integration Tests**: Incorporate Jest and React-testing-library to ensure robustness and reliability.
- **GitHub CI/CD Pipelines**: Implement GitHub actions to run tests. PRs should pass these checks before being merged.
- **Save and Retrieve Designs**: Allow users to save and retrieve their customsied figure designs. Planning to use a NoSQL database such as MongoDB to save design configurations.
- **Generative AI Integration**: Use Generative AI to:
  - Generate a personality for the figure based on the customisations made.
  - Generate a figure based on a description provided by the user.
- **Performance Improvements**: Consider the user of Matcaps over light-responsive meshes. Use r3f-perf for performance monitoring.
- **Error Handling**: Implement error handling for failed API calls and other errors.

## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/samueljacobs98/figuriine.git
```

2. Install Dependencies:
   Navigate to the project directory and run:

```bash
npm install
```

3. Run Locally:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.
