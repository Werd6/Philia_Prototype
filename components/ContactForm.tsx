"use client";

import { useState, type FormEvent } from "react";

const INTERESTS = [
  "Attending an event",
  "Joining the community",
  "Volunteering",
  "Partnering as an organization",
  "Giving or sponsorship",
  "Something else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="interest">I’m interested in</label>
        <select id="interest" name="interest" defaultValue={INTERESTS[0]}>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Lorem ipsum dolor sit amet…" />
      </div>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
      {sent ? (
        <p className="form-done" role="status">
          Prototype only. Messages are not sent yet.
        </p>
      ) : (
        <p className="form-note">We reply personally, usually within a few days.</p>
      )}
    </form>
  );
}
