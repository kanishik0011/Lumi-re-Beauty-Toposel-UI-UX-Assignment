import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  Camera,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'
import './App.css'

type Product = {
  name: string
  category: 'Skincare' | 'Makeup' | 'Haircare' | 'Fragrance'
  price: number
  originalPrice?: number
  badge?: string
  sprite: number
  image?: string
}

const products: Product[] = [
  { name: 'Radiance Vitamin C Serum', category: 'Skincare', price: 1299, originalPrice: 1499, badge: 'Best seller', sprite: 0 },
  { name: 'Dew Drop Hydrating Moisturizer', category: 'Skincare', price: 999, sprite: 1 },
  { name: 'Velvet Matte Lipstick', category: 'Makeup', price: 799, badge: 'New', sprite: 2 },
  { name: 'Botanical Repair Hair Mask', category: 'Haircare', price: 1499, sprite: 3 },
  { name: 'Daily Glow SPF 50', category: 'Skincare', price: 899, sprite: 1 },
  { name: 'Rosewater Renewal Toner', category: 'Skincare', price: 699, sprite: 0 },
  { name: 'Soft Focus Blush', category: 'Makeup', price: 1099, sprite: 2 },
  { name: 'Overnight Recovery Cream', category: 'Skincare', price: 1599, sprite: 3 },
  { name: 'Santal Veil Eau de Parfum', category: 'Fragrance', price: 1899, sprite: 3, badge: 'New', image: '/assets/fragrance-santal-veil.png' },
]

const categories = [
  { name: 'Skincare', note: 'Glow from within', sprite: 0 },
  { name: 'Makeup', note: 'Your daily ritual', sprite: 1 },
  { name: 'Haircare', note: 'Care, naturally', sprite: 2 },
  { name: 'Fragrance', note: 'A softer signature', sprite: 3 },
]

const navItems = ['Skincare', 'Makeup', 'Haircare', 'Fragrance', 'New Arrivals']

function formatPrice(value: number) {
  return `₹${value.toLocaleString('en-IN')}`
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [wishlist, setWishlist] = useState<string[]>([])
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [email, setEmail] = useState('')
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success' | 'error'>('idle')

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesSearch = !query || `${product.name} ${product.category}`.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2400)
  }

  const selectCategory = (category: string) => {
    setActiveCategory(category === 'New Arrivals' ? 'All' : category)
    setMobileOpen(false)
    setMobileSearchOpen(false)
    document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const addToCart = (product: Product) => {
    setCartCount((count) => count + 1)
    notify(`${product.name} added to your bag`)
  }

  const toggleWishlist = (name: string) => {
    setWishlist((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])
  }

  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setNewsletterState('error')
      return
    }
    setNewsletterState('success')
    setEmail('')
  }

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={13} strokeWidth={1.6} /> Complimentary shipping over ₹1,499 <span>·</span> Thoughtful beauty, delivered.</div>

      <header className="site-header">
        <div className="header-main container">
          <button className="icon-button mobile-menu-button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <a className="wordmark" href="#top" aria-label="Lumière Beauty home">LUMIÈRE <span>BEAUTY</span></a>
          <div className={`search-wrap ${mobileSearchOpen ? 'mobile-search-open' : ''}`}>
            <Search size={17} aria-hidden="true" />
            <input id="product-search" aria-label="Search products" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search your ritual" />
            {search && <button className="clear-search" onClick={() => setSearch('')} aria-label="Clear search"><X size={15} /></button>}
          </div>
          <div className="header-actions">
            <button className="header-action mobile-search-button" aria-label="Search products" aria-expanded={mobileSearchOpen} aria-controls="product-search" onClick={() => setMobileSearchOpen((open) => !open)}><Search size={19} /></button>
            <button className="header-action" aria-label="Account"><UserRound size={19} /><span>Account</span></button>
            <button className="header-action bag-action" aria-label={`Shopping bag with ${cartCount} items`}><ShoppingBag size={19} /><span>Bag</span>{cartCount > 0 && <b>{cartCount}</b>}</button>
          </div>
        </div>
        <nav id="primary-navigation" className={`desktop-nav container ${mobileOpen ? 'mobile-nav-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} className={activeCategory === item ? 'nav-link active' : 'nav-link'} onClick={() => selectCategory(item)}>{item}{item === 'New Arrivals' && <span className="nav-new">New</span>}</button>)}
          <button className="nav-link nav-offer" onClick={() => document.querySelector('#offers')?.scrollIntoView({ behavior: 'smooth' })}>The Edit <ArrowRight size={14} /></button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="hero-index"><span>01</span><span>THE GLOW EDIT</span></div>
            <p className="eyebrow">A considered beauty ritual</p>
            <h1>Your glow.<br /><em>Your ritual.</em></h1>
            <p className="hero-subtitle">Thoughtfully curated beauty essentials for skin that feels as radiant as you are.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => selectCategory('All')}>Shop the collection <ArrowRight size={16} /></button><button className="text-link" onClick={() => selectCategory('Skincare')}>Explore skincare <ArrowRight size={15} /></button></div>
            <div className="hero-proof"><span className="proof-dots"><i /><i /><i /></span><span>Small rituals. Big difference.</span></div>
          </div>
          <div className="hero-image" role="img" aria-label="Lumière skincare products in warm afternoon light"><div className="hero-caption"><span>Made for the everyday</span><span>India · 2026</span></div></div>
        </section>

        <section className="category-section container" aria-labelledby="category-title">
          <div className="section-heading compact"><div><p className="eyebrow">Find your ritual</p><h2 id="category-title">Shop by category</h2></div><button className="text-link" onClick={() => selectCategory('All')}>View all <ArrowRight size={15} /></button></div>
          <div className="category-grid">{categories.map((category, index) => <button key={category.name} className={`category-card category-${index}`} onClick={() => selectCategory(category.name)}><div className="category-image" aria-hidden="true" /><div className="category-copy"><span><b>0{index + 1}</b>{category.note}</span><strong>{category.name}</strong><ArrowRight size={17} /></div></button>)}</div>
        </section>

        <section className="ritual-note container" aria-label="Lumière design philosophy">
          <p className="eyebrow">The Lumière approach</p>
          <p className="ritual-note-copy">Beautifully useful, quietly considered — a smaller edit of the things that make a ritual feel like yours.</p>
          <span className="ritual-note-mark" aria-hidden="true">✳</span>
        </section>

        <section className="collection-section" id="collection" aria-labelledby="collection-title">
          <div className="container">
            <div className="collection-meta"><span>{filteredProducts.length} considered pieces</span><span>Curated in India · Ships worldwide</span></div>
            {filteredProducts.length > 0 ? <div className="product-grid">{filteredProducts.map((product, index) => <article className="product-card" key={product.name}><div role="img" aria-label={`${product.name} product image`} className={`product-image product-sprite-${product.sprite} ${product.image ? 'product-dedicated' : ''}`} style={product.image ? { backgroundImage: `url(${product.image})` } : undefined}><div className="product-topline"><span className="product-index">0{index + 1}</span><div className="product-actions">{product.badge && <span className="product-badge">{product.badge}</span>}<button className={wishlist.includes(product.name) ? 'wishlist active' : 'wishlist'} onClick={() => toggleWishlist(product.name)} aria-label={`${wishlist.includes(product.name) ? 'Remove' : 'Add'} ${product.name} ${wishlist.includes(product.name) ? 'from' : 'to'} wishlist`}><Heart size={17} fill={wishlist.includes(product.name) ? 'currentColor' : 'none'} /></button></div></div></div><div className="product-info"><p className="product-category">{product.category}</p><h3>{product.name}</h3><div className="product-price">{formatPrice(product.price)} {product.originalPrice && <del>{formatPrice(product.originalPrice)}</del>}</div><button className="add-button" onClick={() => addToCart(product)}>Add to bag <ArrowRight size={15} /></button></div></article>)}</div> : <div className="empty-state"><p>No pieces found for “{search}”.</p><button className="text-link" onClick={() => { setSearch(''); setActiveCategory('All') }}>Reset filters <ArrowRight size={15} /></button></div>}
          </div>
        </section>

        <section className="promo container" id="offers"><div className="promo-image" aria-hidden="true" /><div className="promo-copy"><p className="eyebrow">A little extra glow</p><h2>Your ritual,<br /><em>made luminous.</em></h2><p>Enjoy 20% off your first beauty ritual. A considered starting point for skin, mood, and everything in between.</p><button className="button button-light" onClick={() => selectCategory('All')}>Explore offers <ArrowRight size={16} /></button></div><span className="promo-number">02 / 04</span></section>

        <section className="benefits container" aria-label="Shopping benefits"><div className="benefit"><span className="benefit-icon"><Sparkles size={19} /></span><div><strong>Carefully curated</strong><p>Fewer, better essentials.</p></div></div><div className="benefit"><span className="benefit-icon"><Check size={19} /></span><div><strong>Secure checkout</strong><p>Simple, safe, seamless.</p></div></div><div className="benefit"><span className="benefit-icon"><ArrowRight size={19} /></span><div><strong>Easy returns</strong><p>Take your time deciding.</p></div></div><div className="benefit"><span className="benefit-icon"><UserRound size={19} /></span><div><strong>Here to help</strong><p>Real people, thoughtful advice.</p></div></div></section>

        <section className="newsletter"><div className="newsletter-inner container"><div><p className="eyebrow">A note in your inbox</p><h2>Beauty notes,<br /><em>just for you.</em></h2></div><div className="newsletter-form-wrap"><p>A little inspiration, new rituals, and considered edits—never too much, always worth opening.</p><form onSubmit={submitNewsletter} noValidate><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setNewsletterState('idle') }} placeholder="Your email address" aria-describedby="newsletter-feedback" required /><button className="button button-dark" type="submit">Subscribe <ArrowRight size={16} /></button></form><p id="newsletter-feedback" aria-live="polite" className={`form-feedback ${newsletterState}`}>{newsletterState === 'success' ? 'You’re on the list — thank you.' : newsletterState === 'error' ? 'Please enter a valid email address.' : 'No noise. Unsubscribe anytime.'}</p></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><a className="wordmark" href="#top">LUMIÈRE <span>BEAUTY</span></a><p>Considered beauty for everyday rituals. Made to feel good, look beautiful, and stay with you.</p><div className="socials"><a href="#instagram" aria-label="Instagram"><Camera size={17} /></a><a href="#pinterest" aria-label="Pinterest">P</a><a href="#facebook" aria-label="Facebook">f</a></div></div><div className="footer-column"><h3>Shop</h3><a href="#collection">Skincare</a><a href="#collection">Makeup</a><a href="#collection">Haircare</a><a href="#collection">Fragrance</a></div><div className="footer-column"><h3>About</h3><a href="#about">Our story</a><a href="#journal">The journal</a><a href="#careers">Careers</a><a href="#contact">Contact</a></div><div className="footer-column"><h3>Help</h3><a href="#faq">FAQ</a><a href="#shipping">Shipping & returns</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div></div><div className="container footer-bottom"><span>© 2026 Lumière Beauty. A demo experience.</span><span>Made with intention in India <span aria-hidden="true">♡</span></span></div></footer>
      {toast && <div className="toast" role="status"><Check size={16} /> {toast}</div>}
    </div>
  )
}

export default App
