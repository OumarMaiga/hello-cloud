"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ICI vous pouvez envoyer les infos vers une API route
    // Exemple POST /api/contact
    console.log("Données envoyées :", form);

    alert("Message envoyé !");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Hello cloud</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-semibold">Nom complet</label>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Votre message..."
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h2 className="font-bold">Nos coordonnées</h2>
          <p>Email : contact@example.com</p>
          <p>Téléphone : +223 79 00 00 00</p>
          <p>Adresse : Bamako, Mali</p>
        </div>
      </div>
    </div>
  );
}
