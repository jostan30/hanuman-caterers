
export interface WelcomeSection {
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutUsSection {
  title: string;
  description: string;
  highlights: string[];
}

export interface AdvertisingOffer {
  title: string;
  description: string;
  validity: string;
}

export interface AdvertisingSection {
  title: string;
  mainOffer: AdvertisingOffer;
  services: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface FooterSection {
  contact: ContactInfo;
  socialLinks: SocialLinks;
}

export interface LandingPage {
  welcome: WelcomeSection;
  aboutUs: AboutUsSection;
  advertising: AdvertisingSection;
  footer: FooterSection;
}

export interface MenuItem {
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface MenuCat {
  category: string;
  items: MenuItem[];
}

export interface ContentData {
  landingPage: LandingPage;
  menu: MenuCat[];
}
