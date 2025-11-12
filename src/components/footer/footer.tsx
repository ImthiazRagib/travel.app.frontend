import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const payments = [
  "/visa.png",
  "/amex.png",
  "/mastercard.png",
  "/unionpay.png",
  "/diners.png",
  "/dbbl.png",
  "/takapay.png",
  "/bkash.png",
  "/nagad.png",
  "/upay.png",
  "/tap.png",
];

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Discover */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Discover</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Talent & Culture</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">EMI Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Payment Methods</h3>
          <div className="grid grid-cols-3 gap-3">
            {payments.map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-2 flex justify-center items-center"
              >
                <img src={src} alt="payment" className="w-12 h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Need Help ?</h3>
          <p className="text-sm text-gray-200 mb-4">
            We’re here for you 24/7! Reach out to us through Messenger or call anytime, day or night, for the support you need.
          </p>

          <h3 className="font-semibold mb-2 text-lg">Experience Center</h3>
          <p className="text-sm text-gray-200">
            Sheltech Ayaan, House 58, Road 6 & 11, Block C, Level 2, Banani, Dhaka
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <p className="text-sm text-gray-200">info@gozayaan.com</p>
          <p className="text-sm text-gray-200 mb-4">+88 09678 333 211</p>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <Facebook className="text-white" size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <Youtube className="text-white" size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <Instagram className="text-white" size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Gozayan Travel. All Rights Reserved.
      </div>
    </footer>
  );
}
