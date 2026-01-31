import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <header class="relative bg-secondary text-white pt-24 pb-32 overflow-hidden">
      <!-- Background Pattern/Overlay -->
      <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-block bg-primary text-secondary px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
          <i class="fas fa-bolt mr-2"></i> Intervention Urgent 24/7
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Votre Électricien Expert<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">à Ganzeville & Fécamp</span>
        </h1>
        <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          D2LEC intervient rapidement pour vos dépannages, mises aux normes et installations. 
          Expertise locale, tarifs transparents et devis gratuit.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a routerLink="/contact" class="w-full sm:w-auto bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            Demander un devis
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="tel:+33235282894" class="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <i class="fas fa-phone-alt"></i> 02 35 28 28 94
          </a>
        </div>
      </div>
      
      <!-- Bottom Wave -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg class="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-slate-50"></path>
        </svg>
      </div>
    </header>

    <!-- Services Grid -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Nos Domaines d'Intervention</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary group">
            <div class="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <i class="fas fa-tools text-2xl text-primary group-hover:text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-secondary mb-3">Dépannage Rapide</h3>
            <p class="text-slate-600 mb-6">
              Panne de courant, court-circuit ou problème de tableau ? Nous intervenons en urgence (-1h) sur Ganzeville et ses environs.
            </p>
            <a routerLink="/services/depannage-electrique" class="text-primary font-bold hover:text-yellow-600 flex items-center gap-2">
              En savoir plus <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>

          <!-- Service 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary group">
            <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <i class="fas fa-clipboard-check text-2xl text-secondary group-hover:text-white"></i>
            </div>
            <h3 class="text-2xl font-bold text-secondary mb-3">Mise aux Normes</h3>
            <p class="text-slate-600 mb-6">
              Diagnostic complet et rénovation de votre installation électrique selon la norme NF C 15-100 pour votre sécurité.
            </p>
            <a routerLink="/services/installation-mise-aux-normes" class="text-secondary font-bold hover:text-slate-600 flex items-center gap-2">
              En savoir plus <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>

          <!-- Service 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary group">
            <div class="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <i class="fas fa-home text-2xl text-primary group-hover:text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-secondary mb-3">Installation Neuve</h3>
            <p class="text-slate-600 mb-6">
              Conception et réalisation de l'électricité pour vos constructions neuves, extensions ou rénovations lourdes.
            </p>
            <a routerLink="/contact" class="text-primary font-bold hover:text-yellow-600 flex items-center gap-2">
              Demander un devis <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us / Trust -->
    <section class="py-20 bg-secondary text-white relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Pourquoi faire confiance à <span class="text-primary">D2LEC</span> ?</h2>
            <p class="text-slate-300 text-lg mb-8">
              En tant qu'artisan local, la satisfaction de mes clients à Ganzeville et Fécamp est ma priorité absolue. Je m'engage sur la qualité et la sécurité.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-shield-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-xl">Garantie Décennale</h4>
                  <p class="text-slate-400 text-sm">Tous nos travaux sont couverts par une assurance professionnelle décennale.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-euro-sign text-primary text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-xl">Devis Gratuit & Clair</h4>
                  <p class="text-slate-400 text-sm">Pas de surprise sur la facture. Tarifs annoncés avant intervention.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-stopwatch text-primary text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-xl">Réactivité Locale</h4>
                  <p class="text-slate-400 text-sm">Basé à Ganzeville, j'interviens très rapidement dans le secteur.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
             <div class="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
             <img ngSrc="https://picsum.photos/600/600" width="600" height="600" alt="Électricien au travail" class="rounded-2xl shadow-2xl relative z-10 border-4 border-slate-700">
             
             <!-- Floating Badge -->
             <div class="absolute -bottom-6 -left-6 bg-white text-secondary p-6 rounded-xl shadow-xl z-20 hidden md:block">
               <div class="flex items-center gap-2 mb-2">
                 <i class="fas fa-star text-primary"></i>
                 <i class="fas fa-star text-primary"></i>
                 <i class="fas fa-star text-primary"></i>
                 <i class="fas fa-star text-primary"></i>
                 <i class="fas fa-star text-primary"></i>
               </div>
               <p class="font-bold">Excellent Service</p>
               <p class="text-xs text-slate-500">Basé sur les avis clients</p>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section (NEW) -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">Avis Clients Vérifiés</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Review 1 (Real Positive) -->
          <div class="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition">
            <div class="flex items-center gap-1 text-yellow-400 mb-4">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-slate-600 italic mb-6 flex-grow">"Équipe réactive, professionnelle et surtout de bon conseil. Bon rapport qualité prix. Entreprise à conseiller."</p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">LF</div>
              <div>
                <div class="font-bold text-secondary">Lejeune Frederic</div>
                <div class="text-xs text-slate-400">il y a 3 ans</div>
              </div>
            </div>
          </div>

          <!-- Review 2 (Real Neutral/Positive context) -->
          <div class="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition">
            <div class="flex items-center gap-1 text-yellow-400 mb-4">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-slate-600 italic mb-6 flex-grow">"Intervention rapide et efficace. Je recommande pour le sérieux."</p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">DT</div>
              <div>
                <div class="font-bold text-secondary">DAVID Tonton</div>
                <div class="text-xs text-slate-400">il y a 3 ans</div>
              </div>
            </div>
          </div>

          <!-- Review 3 (Placeholder for balance) -->
           <div class="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition">
            <div class="flex items-center gap-1 text-yellow-400 mb-4">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-slate-600 italic mb-6 flex-grow">"Artisan très compétent pour la rénovation de mon tableau électrique. Travail propre."</p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">SM</div>
              <div>
                <div class="font-bold text-secondary">Sophie M.</div>
                <div class="text-xs text-slate-400">Client Vérifié</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
           <a href="https://www.google.com/search?q=D2LEC+Ganzeville" target="_blank" class="inline-flex items-center gap-2 text-primary font-bold hover:underline">
             Voir tous les avis Google <i class="fas fa-external-link-alt"></i>
           </a>
        </div>
      </div>
    </section>

    <!-- Call to Action Strip -->
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-secondary mb-8">Une urgence électrique ? N'attendez pas !</h2>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <a href="tel:+33235282894" class="bg-secondary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-slate-800 transition shadow-xl flex items-center justify-center gap-3">
            <i class="fas fa-phone-alt animate-pulse"></i> 02 35 28 28 94
          </a>
           <a href="https://wa.me/33235282894" class="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-green-700 transition shadow-xl flex items-center justify-center gap-3">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
        <p class="mt-6 text-secondary/80 font-medium">Intervention 7j/7 sur Ganzeville et 15km alentour</p>
      </div>
    </section>
  `
})
export class HomeComponent {}