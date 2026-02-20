import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen bg-navy-900 text-gray-100">
      <ScrollToTop />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur-lg">
        <div className="section-container flex items-center justify-between py-4">
          <Link to="/" className="font-display text-3xl sm:text-4xl font-bold gradient-text tracking-tight hover:opacity-90 transition-opacity">
            focus@wil
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="/#how-it-works" className="hover:text-amber-400 transition-colors">How it Works</a>
            <a href="/#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
            <a href="/#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
            <Link to="/about" className="hover:text-amber-400 transition-colors">About</Link>
          </nav>
          <Link
            to="/"
            className="sm:hidden text-amber-400 font-medium text-sm"
          >
            Focus Now
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-navy-800/50">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="font-display text-2xl font-bold gradient-text mb-3 inline-block">focus@wil</Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                The world&rsquo;s premiere destination for scientifically optimized Wil-based focus enhancement.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Wil</Link></li>
                <li><Link to="/careers" className="hover:text-amber-400 transition-colors">Careers at Wil</Link></li>
                <li><Link to="/privacy" className="hover:text-amber-400 transition-colors">Wil Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Wil</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="https://github.com/whobutsb/focusatwil" className="hover:text-amber-400 transition-colors">
                    Build the Wiliverse
                  </a>
                </li>
                <li><span className="hover:text-gray-300 cursor-default">Wil Ambassador Program</span></li>
                <li><span className="hover:text-gray-300 cursor-default">Submit a Wil</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Focus@Wil. All Wils reserved. Not affiliated with any actual productivity company.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
