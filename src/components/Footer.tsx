

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 20px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>NIYAZ.</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
                    &copy; {new Date().getFullYear()} Niyaz. All rights reserved. <br />
                    Crafted with passion using React & Framer Motion.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <a href="#" className="hover:text-accent-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-accent-primary transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-accent-primary transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
