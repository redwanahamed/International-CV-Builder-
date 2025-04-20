
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Career Tips', href: '#' },
        { name: 'Resume Examples', href: '#' },
        { name: 'Help Center', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link 
              to="/" 
              className="text-xl font-bold tracking-tight text-foreground flex items-center"
            >
              <span className="bg-primary text-primary-foreground p-1 rounded mr-2 text-sm">CV</span>
              Forge
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Create professional, standout CVs with our intuitive platform.
              We help you make the best first impression.
            </p>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-medium text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CV Forge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
