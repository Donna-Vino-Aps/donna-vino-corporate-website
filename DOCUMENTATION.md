# Project Documentation

This document outlines the development workflow, coding standards, and processes implemented in the project.

## Overview

This project was initialized using Next.js and includes configurations to ensure consistent code quality and a smooth development process. Below are the key tools and workflows that have been set up:

### 1. Code Formatting and Linting

- **ESLint**: Configured to enforce coding standards and catch common issues.
- **Prettier**: Integrated with ESLint to ensure consistent code formatting.

### 2. Pre-commit Hooks

- **Husky**: Installed and configured to run pre-commit hooks that automatically check and enforce code style before commits.
- Pre-commit tasks include:
  - Linting and formatting checks using ESLint and Prettier.

### 3. Branch Protection Rules

Branch protection has been set up for the `main` branch to ensure code quality and collaborative efficiency:

- Pull requests are required before merging.
- At least one approval is required.
- Direct pushes to the `main` branch are blocked.
- Force pushes and branch deletions are restricted.
- Conversation resolution is required before merging.

### 4. Workflow Recommendations

- Developers should create feature branches for new tasks and open pull requests to merge changes into `main`.
- Feature branches should follow naming conventions, such as `feature/<description>` or `fix/<description>`.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Run linting checks manually:**

   ```bash
   npm run lint
   ```

5. **Format code:**
   ```bash
   npm run prettier
   ```

## Additional Notes

- **Husky**: The `.husky/` directory is used for managing Git hooks.

  - Pre-commit hooks are configured in this folder to automatically run style checks before any commit.

- **Branch Protection**: Contributors are encouraged to avoid direct commits to `main` and should always use pull requests to merge code.

## Future Improvements

As the project evolves, additional tools or workflows can be integrated, such as:

- **Testing automation**: Using tools like Jest or Cypress.
- **Continuous Integration (CI)**: Pipelines to enforce checks on pull requests.
