import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xoqgaanq");

  if (state.succeeded) {
    return (
      <p className="thanking">
        Votre message est la lumière qui éclaire notre journée. Merci de nous
        avoir contactés avec vos pensées brillantes !{" "}
      </p>
    );
  }

  return (
    <div className="contact-page">
      <h2 className="contact">Contactez–moi</h2>
      <p className="para-contact">
        Le dialogue commence ici. Si vous avez des demandes, des suggestions ou
        si vous souhaitez simplement échanger, je suis ravi de vous écouter.
        Connectons-nous également sur{" "}
        <a
          href="https://www.linkedin.com/in/florian-geron-613042224/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
        . Votre message est le premier pas vers une conversation significative.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input id="name" type="name" name="name" />
        <ValidationError prefix="name" field="name" errors={state.errors} />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="subject">Sujet</label>
        <input id="subject" type="text" name="subject" />
        <ValidationError prefix="Sujet" field="subject" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" className="drop-form" disabled={state.submitting}>
          Envoyé
        </button>
      </form>
    </div>
  );
};

export default Contact;
