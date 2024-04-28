import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.dataContact}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
