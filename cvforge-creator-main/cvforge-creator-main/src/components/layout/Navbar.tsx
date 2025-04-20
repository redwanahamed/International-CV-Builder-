
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.email) return '?';
    return user.email.substring(0, 2).toUpperCase();
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container-padding mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-xl font-bold text-primary">CV Builder</Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/templates" 
            className={`text-sm font-medium ${isActive('/templates') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Templates
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium ${isActive('/dashboard') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                Dashboard
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/create-cv">
                <Button>Create CV</Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-white z-50 border-b border-gray-100 shadow-md">
            <div className="flex flex-col p-4 space-y-3">
              <Link 
                to="/" 
                className={`text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/templates" 
                className={`text-sm font-medium ${isActive('/templates') ? 'text-primary' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`text-sm font-medium ${isActive('/dashboard') ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Button onClick={handleSignOut} variant="outline" className="justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/create-cv" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Create CV</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
