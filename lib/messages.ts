// DONE REVIEWING: GITHUB COMMIT

export const errors = {
  DEFAULT: {title: "Error 😔", description: "There was a problem. Please, try again later."},
  AUTH: {
    UNAUTHORIZED: {
      title: "Error 😔",
      description: "You have entered an in-valid email or password."
    },
    CONFLICT: {title: "Error 😔", description: "You have entered an email that already in use."}
  },
  COUNTRIES: {title: "Error 😔", description: "There was a problem fetching nationalities."}
}

export const successes = {
  AUTH: {
    SIGN_UP: {title: "Welcome 😊", description: "We have sent you a verification email."},
    SIGN_IN: {title: "Welcome back 😊", description: "You have successfully signed in."}
  }
}
