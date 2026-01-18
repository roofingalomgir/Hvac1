
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';

export const COLORS = {
  primary: '#031441',
  accent: '#ff5722',
  text: '#666666',
  bgLight: '#f8faff',
};

export const CONTACT_INFO = {
  phone: '+629-555-0129',
  email: 'help@coolex.com',
  address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS = [
  { icon: <Facebook size={18} />, url: '#' },
  { icon: <Twitter size={18} />, url: '#' },
  { icon: <Instagram size={18} />, url: '#' },
  { icon: <Youtube size={18} />, url: '#' },
  { icon: <Github size={18} />, url: '#' },
];
