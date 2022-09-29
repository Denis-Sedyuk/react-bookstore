export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/user-not-found"
  | "auth/wrong-password";

export enum FirebaseError {
  THIS_EMAIL_ALREADY_IN_USE = "This email is already in use, please try another one",
  THIS_USER_NOT_FOUND = "User not found, please try again",
  ERROR_PASSWORD = "Invalid password, please try again",
  UNKNOW_ERROR = "Unknow error, please try again",
}

export const getFirebaseMessage = (code: FirebaseErrorCode) => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseError.THIS_EMAIL_ALREADY_IN_USE;

    case "auth/user-not-found":
      return FirebaseError.THIS_USER_NOT_FOUND;

    case "auth/wrong-password":
      return FirebaseError.ERROR_PASSWORD;

    default:
      return FirebaseError.UNKNOW_ERROR;
  }
};
