export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-300">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Company</h3>
          <ul>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Products</h3>
          <ul>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Legal</h3>
          <ul>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Email" className="mt-2 w-full px-3 py-2 border rounded bg-white dark:bg-gray-700" />
        </div>
      </div>
      <div className="text-center mt-6 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Premium Platform. All rights reserved.
      </div>
    </footer>
  );
}

