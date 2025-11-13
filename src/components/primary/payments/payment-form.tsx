import React, { useState } from "react";

interface PaymentFormProps {
  onSubmit: (data: any) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, cardNumber, expiry, cvv });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
          Card Number
        </label>
        <input
          type="text"
          maxLength={19}
          value={cardNumber}
          onChange={(e) =>
            setCardNumber(
              e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim()
            )
          }
          placeholder="1234 5678 9012 3456"
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          required
        />
      </div>

      <div className="flex gap-3">
        <div className="w-1/2">
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Expiry
          </label>
          <input
            type="text"
            maxLength={5}
            value={expiry}
            onChange={(e) =>
              setExpiry(e.target.value.replace(/^(\d{2})(\d{0,2})$/, "$1/$2"))
            }
            placeholder="MM/YY"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            CVV
          </label>
          <input
            type="password"
            maxLength={3}
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
            placeholder="123"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition-colors"
      >
        Pay Now
      </button>

      <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-3">
        Secure payment • Encrypted data transfer 🔒
      </p>
    </form>
  );
}
