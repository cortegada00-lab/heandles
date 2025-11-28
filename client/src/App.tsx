import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProductPage from "@/pages/product";
import CategoryPage from "@/pages/category";
import CartPage from "@/pages/cart";
import NovedadesPage from "@/pages/novedades";
import OfertasPage from "@/pages/ofertas";
import AccountPage from "@/pages/account";
import StoresPage from "@/pages/stores";
import AuthPage from "@/pages/auth-page";
import GuidesPage from "@/pages/guides";
import SearchPage from "@/pages/search";
import OrderSuccessPage from "@/pages/order-success";
import StarterPackPage from "@/pages/starter-pack";
import FavoritesPage from "@/pages/favorites";
import StaticPage from "@/pages/static";
import ProductProPage from "@/pages/product-pro";
import { CartProvider } from "@/lib/cart-context";
import { FavoritesProvider } from "@/lib/favorites-context";
import { CookieConsent } from "@/components/shared/cookie-consent";

import ContactPage from "@/pages/contact";
import DisposablesPage from "@/pages/disposables";
import BlogPage from "@/pages/blog";
import ShippingPage from "@/pages/shipping";
import BrandsPage from "@/pages/brands";
import BrandVaporessoPage from "@/pages/brand-vaporesso";
import BrandOxvaPage from "@/pages/brand-oxva";
import AboutPage from "@/pages/about";

import AlchemyPage from "@/pages/alchemy";

import MixDemoPage from "@/pages/mix-demo";
import QuickViewDemoPage from "@/pages/quick-view-demo";

import FaqPage from "@/pages/faq";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/faq" component={FaqPage}/>
      <Route path="/calculadora" component={AlchemyPage}/>
      <Route path="/alquimia" component={AlchemyPage}/>
      <Route path="/mix-demo" component={MixDemoPage}/>
      <Route path="/quick-view-demo" component={QuickViewDemoPage}/>
      <Route path="/product" component={ProductPage}/>
      <Route path="/product-pro" component={ProductProPage}/>
      <Route path="/product/:id" component={ProductPage}/>
      
      {/* Categories */}
      <Route path="/eliquids" component={CategoryPage}/>
      <Route path="/category" component={CategoryPage}/>
      <Route path="/kits" component={CategoryPage}/>
      <Route path="/disposables" component={DisposablesPage}/>
      <Route path="/coils" component={CategoryPage}/>
      <Route path="/fabricantes" component={BrandsPage}/>
      <Route path="/brands" component={BrandsPage}/>
      <Route path="/vaporesso" component={BrandVaporessoPage}/>
      <Route path="/oxva" component={BrandOxvaPage}/>
      
      <Route path="/cart" component={CartPage}/>
      <Route path="/checkout" component={CartPage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/favorites" component={FavoritesPage}/>
      <Route path="/contacto" component={ContactPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/sobre-nosotros" component={AboutPage}/>
      <Route path="/about" component={AboutPage}/>
      
      {/* Auth Pages */}
      <Route path="/login" component={AuthPage}/>
      <Route path="/register" component={AuthPage}/>
      <Route path="/forgot-password" component={AuthPage}/>

      {/* New Pages */}
      <Route path="/novedades" component={NovedadesPage}/>
      <Route path="/blog" component={BlogPage}/>
      <Route path="/ofertas" component={OfertasPage}/>
      <Route path="/account" component={AccountPage}/>
      <Route path="/tiendas" component={StoresPage}/>
      <Route path="/guias" component={GuidesPage}/>
      <Route path="/order-success" component={OrderSuccessPage}/>
      <Route path="/starter-pack" component={StarterPackPage}/>
      
      {/* Static Pages */}
      <Route path="/aviso-legal">
        <StaticPage title="Aviso Legal" />
      </Route>
      <Route path="/privacidad">
        <StaticPage title="Política de Privacidad" />
      </Route>
      <Route path="/cookies">
        <StaticPage title="Política de Cookies" />
      </Route>
      <Route path="/terminos">
        <StaticPage title="Términos y Condiciones" />
      </Route>
      <Route path="/envios" component={ShippingPage} />
      <Route path="/devoluciones">
        <StaticPage title="Política de Devoluciones" />
      </Route>
      <Route path="/ayuda">
        <StaticPage title="Centro de Ayuda" />
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

import { Navbar } from "@/components/layout/navbar";

import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <FavoritesProvider>
          <TooltipProvider>
            <Toaster />
            <CookieConsent />
            <ScrollToTop />
            <WhatsAppButton />
            <Router />
          </TooltipProvider>
        </FavoritesProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
