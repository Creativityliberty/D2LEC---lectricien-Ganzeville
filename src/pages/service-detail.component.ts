import { Component, ChangeDetectionStrategy, signal, inject, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

const SERVICES_DB: Record<string, ServiceData> = {
  'depannage-electrique': {
    title: 'Dépannage Électrique Urgent',
    subtitle: 'Intervention rapide à Ganzeville et alentours',
    description: 'Une panne d\'électricité peut être dangereuse et stressante. Chez D2LEC, nous comprenons l\'urgence. Notre service de dépannage est disponible pour identifier rapidement la source du problème (court-circuit, surcharge, matériel défectueux) et rétablir le courant en toute sécurité.',
    features: ['Recherche de panne', 'Remplacement de disjoncteurs', 'Réparation de prises et interrupteurs', 'Sécurisation immédiate'],
    icon: 'fa-bolt',
    image: 'https://picsum.photos/800/600?random=1'
  },
  'installation-mise-aux-normes': {
    title: 'Mise aux Normes & Installation',
    subtitle: 'Conformité NF C 15-100 garantie',
    description: 'Votre installation est ancienne ? Elle présente des risques d\'incendie ou d\'électrocution. D2LEC réalise un diagnostic complet et effectue la mise en conformité de votre tableau et de votre réseau électrique. Nous réalisons également des installations complètes pour le neuf.',
    features: ['Remplacement de tableau électrique', 'Mise à la terre', 'Installation différentielle 30mA', 'Rénovation complète'],
    icon: 'fa-clipboard-check',
    image: 'https://picsum.photos/800/600?random=2'
  },
  'chauffage-electrique': {
    title: 'Chauffage Électrique',
    subtitle: 'Confort thermique et économies d\'énergie',
    description: 'Passez à un chauffage électrique performant. Nous installons des radiateurs à inertie dernière génération qui vous permettent de réduire votre facture tout en améliorant votre confort. Pilotage à distance et programmation inclus.',
    features: ['Installation de radiateurs à inertie', 'Sèche-serviettes', 'Gestionnaire d\'énergie', 'Délestage'],
    icon: 'fa-temperature-high',
    image: 'https://picsum.photos/800/600?random=3'
  }
};

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let data = currentService();
    
    @if (data) {
      <!-- Header -->
      <div class="bg-secondary text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <div class="inline-block p-4 rounded-full bg-slate-700 mb-6">
            <i class="fas {{data.icon}} text-3xl text-primary"></i>
          </div>
          <h1 class="text-3xl md:text-5xl font-bold mb-4">{{data.title}}</h1>
          <p class="text-xl text-slate-300">{{data.subtitle}}</p>
        </div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text -->
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Description du service</h2>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
              {{data.description}}
            </p>
            
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
              <h3 class="font-bold text-secondary mb-4">Ce que nous faisons :</h3>
              <ul class="space-y-3">
                @for (feat of data.features; track feat) {
                  <li class="flex items-center gap-3">
                    <i class="fas fa-check-circle text-green-500"></i>
                    <span class="text-slate-700">{{feat}}</span>
                  </li>
                }
              </ul>
            </div>

            <div class="flex gap-4">
               <a routerLink="/contact" class="bg-primary text-secondary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition shadow-md">
                 Demander un devis
               </a>
               <a href="tel:+33235282894" class="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition">
                 02 35 28 28 94
               </a>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
             <div class="absolute -top-4 -right-4 w-full h-full border-4 border-primary rounded-xl -z-10"></div>
             <img [ngSrc]="data.image" width="800" height="600" class="rounded-xl shadow-lg w-full object-cover h-96" alt="{{data.title}}">
          </div>
        </div>
      </div>

      <!-- FAQ Placeholder -->
      <div class="bg-slate-50 py-16">
        <div class="container mx-auto px-4 max-w-3xl">
          <h2 class="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
          <div class="space-y-4">
             <div class="bg-white p-6 rounded-lg shadow-sm">
               <h4 class="font-bold text-secondary mb-2">Intervenez-vous le week-end ?</h4>
               <p class="text-slate-600">Oui, pour les urgences et pannes totales, nous assurons une permanence le week-end.</p>
             </div>
             <div class="bg-white p-6 rounded-lg shadow-sm">
               <h4 class="font-bold text-secondary mb-2">Le devis est-il payant ?</h4>
               <p class="text-slate-600">Non, tous nos devis sont 100% gratuits et sans engagement.</p>
             </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
        <h1 class="text-4xl font-bold text-secondary mb-4">Service non trouvé</h1>
        <p class="text-slate-500 mb-8">Le service que vous cherchez n'existe pas ou a été déplacé.</p>
        <a routerLink="/" class="text-primary font-bold hover:underline">Retour à l'accueil</a>
      </div>
    }
  `
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);
  
  // Create a computed signal based on the route param
  slug = signal<string>('');
  
  constructor() {
    this.route.params.subscribe(params => {
      this.slug.set(params['slug']);
    });
  }

  currentService = computed(() => {
    const s = this.slug();
    return SERVICES_DB[s] || null;
  });
}