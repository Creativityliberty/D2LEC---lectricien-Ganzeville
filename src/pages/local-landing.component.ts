import { Component, ChangeDetectionStrategy, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let city = cityName();
    
    <!-- Local Hero -->
    <header class="bg-secondary text-white py-20 px-4 text-center">
      <div class="container mx-auto">
        <div class="inline-flex items-center gap-2 bg-slate-700 px-4 py-1 rounded-full text-sm mb-6">
          <i class="fas fa-map-marker-alt text-primary"></i>
          <span>Zone d'intervention : {{city}}</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Électricien à {{city}}</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          D2LEC est votre artisan de proximité. Nous intervenons dans tous les quartiers de {{city}} pour vos urgences et travaux.
        </p>
        <a routerLink="/contact" class="bg-primary text-secondary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Prendre RDV à {{city}}
        </a>
      </div>
    </header>

    <!-- Local Features -->
    <section class="py-16 container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
         <div class="text-center p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
           <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
             <i class="fas fa-car-side"></i>
           </div>
           <h3 class="font-bold text-lg mb-2">Déplacement Rapide</h3>
           <p class="text-slate-600">Étant basé tout près de {{city}}, nous arrivons en un temps record.</p>
         </div>
         <div class="text-center p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
           <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl">
             <i class="fas fa-hand-holding-heart"></i>
           </div>
           <h3 class="font-bold text-lg mb-2">Confiance Locale</h3>
           <p class="text-slate-600">Artisan connu et recommandé par les habitants de {{city}}.</p>
         </div>
         <div class="text-center p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
           <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 text-2xl">
             <i class="fas fa-file-contract"></i>
           </div>
           <h3 class="font-bold text-lg mb-2">Devis Adapté</h3>
           <p class="text-slate-600">Des tarifs justes, sans frais de déplacement excessifs pour {{city}}.</p>
         </div>
      </div>
    </section>

    <!-- Map Placeholder -->
    <section class="bg-slate-100 py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-8">Nous couvrons tout {{city}}</h2>
        <div class="bg-slate-300 w-full h-64 rounded-xl flex items-center justify-center text-slate-500">
          <div class="text-center">
            <i class="fas fa-map text-4xl mb-2"></i>
            <p>Carte de la zone : {{city}} (Simulée)</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class LocalLandingComponent {
  private route = inject(ActivatedRoute);
  
  cityParam = signal('');

  constructor() {
    this.route.params.subscribe(p => this.cityParam.set(p['city']));
  }

  cityName = computed(() => {
    const raw = this.cityParam();
    // Simple formatter: 'electricien-ganzeville' -> 'Ganzeville'
    if (!raw) return 'Ganzeville';
    const parts = raw.split('-');
    if (parts.length > 1) {
      return parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    }
    return 'Ganzeville';
  });
}