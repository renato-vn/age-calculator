# Age Calculator App

A modern, mobile-first age calculator built with React, TypeScript, and Tailwind CSS.

## Features

- Calculates exact years, months, and days elapsed from a given date
- Input validation for day, month, and year fields
- User-friendly error messaging and input feedback
- Responsive, mobile-focused layout matching professional UI standards
- Modular codebase with reusable components
- Custom React hook that manages form state, validation, and result calculation

## Demo

![Demo screenshot](src/assets/demo/age-calculator-demo.gif)

## Technologies

- React
- TypeScript
- Tailwind CSS

## Getting Started

### Clone the repo and install dependencies:

`git clone https://github.com/renato-vn/age-calculator.git`

`cd age-calculator-app`

`npm install`

### Run the app in development:

`npm run dev`

## Usage

Enter the day, month, and year of any past date. Press the arrow button to instantly see how many years, months, and days have passed since that date.

## Project Structure

- `src/components/Input.tsx` — Reusable input with live validation
- `src/constants/functions.ts` — Core logic for validation and age calculation
- `src/hooks/useAgeCalculator.ts` — **Custom hook** for managing form state, validation, and calculation logic
- `src/App.tsx` — Main app and layout

### Custom Hook: useAgeCalculator

This hook (`useAgeCalculator.ts`) encapsulates:

- State management for input values and errors
- Live validation for each input (day, month, year)
- Age calculation logic (years, months, days)
- Submit and disabled state handling

You can use it to rapidly connect your form logic and UI, keeping your codebase modular and maintainable.
