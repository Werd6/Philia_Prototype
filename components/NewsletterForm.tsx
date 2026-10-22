"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="newsletter">
      <div>
        <h2 className="newsletter-title">Stay close to the table.</h2>
        <p className="newsletter-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. One note a month.</p>
      </div>
      <form className="newsletter-form" onSubmit={onSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email" required />
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
        {sent && (
          <p className="newsletter-done" role="status">
            Prototype only. Sign-ups are not saved yet.
          </p>
        )}
      </form>
    </div>
  );
}
