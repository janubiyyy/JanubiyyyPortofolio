
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text mb-4">
                Tasya Khaerani Janubiya
              </h3>
              <p className="text-muted-foreground text-sm">
                Frontend Developer passionate about creating beautiful and functional web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { id: 'home', label: t('home') },
                  { id: 'about', label: t('about') },
                  { id: 'experience', label: t('experience') },
                  { id: 'projects', label: t('projects') },
                  { id: 'skills', label: t('skills') },
                  { id: 'contact', label: t('contact') }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block w-full text-muted-foreground hover:text-amber-600 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">tasyakhaerani66@gmail.com</p>
                <p className="text-muted-foreground">+62 857-7194-2063</p>
                <p className="text-muted-foreground">Jakarta, Indonesia</p>
                <p className="text-muted-foreground">profile.janubiyyy.tech</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              {t('footerText')}
            </p>
            
            <button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 flex items-center space-x-2 text-muted-foreground hover:text-amber-600 transition-colors duration-200 text-sm"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
