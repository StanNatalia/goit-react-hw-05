import css from "./Error.module.css";

export default function ErrorMessage({ message }) {
  return <p className={css.error}>{message}</p>;
}
