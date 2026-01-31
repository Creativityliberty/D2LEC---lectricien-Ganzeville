import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-slate-50 min-h-screen py-16">
      <div class="container mx-auto px-4">
        
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-secondary mb-4">Contactez D2LEC</h1>
          <p class="text-slate-600 text-lg">Une question ? Un projet ? Besoin d'un dépannage urgent ?</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <!-- Contact Info -->
          <div class="bg-secondary text-white rounded-2xl p-8 md:p-12 shadow-xl h-fit">
            <h2 class="text-2xl font-bold mb-8">Informations</h2>
            
            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-phone-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Téléphone</h3>
                  <p class="text-slate-300 mb-1">Du Lundi au Dimanche, 24h/24</p>
                  <a href="tel:+33235282894" class="text-2xl font-bold text-primary hover:text-white transition">02 35 28 28 94</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Adresse</h3>
                  <p class="text-slate-300">
                    1 Route de la Vallée<br>
                    76400 Ganzeville, France
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <i class="fas fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Email</h3>
                  <a href="mailto:contact@d2lec.fr" class="text-slate-300 hover:text-primary transition">contact@d2lec.fr</a>
                </div>
              </div>
            </div>

            <div class="mt-12 pt-8 border-t border-slate-700">
              <p class="text-sm text-slate-400 mb-4">Nous acceptons :</p>
              <div class="flex gap-4 text-2xl text-slate-300">
                <i class="fas fa-money-bill-wave" title="Espèces"></i>
                <i class="fas fa-credit-card" title="Carte Bancaire"></i>
                <i class="fas fa-file-invoice-dollar" title="Virement"></i>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 class="text-2xl font-bold text-secondary mb-6">Envoyez-nous un message</h2>
            
            @if (submitted()) {
              <div class="bg-green-100 border border-green-200 text-green-700 p-6 rounded-lg text-center animate-bounce">
                <i class="fas fa-check-circle text-3xl mb-2"></i>
                <h3 class="font-bold text-lg">Message envoyé !</h3>
                <p>Nous vous recontacterons sous 24h.</p>
                <button (click)="reset()" class="mt-4 text-sm font-bold underline">Envoyer un autre message</button>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Nom complet</label>
                  <input type="text" formControlName="name" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition" placeholder="Votre nom">
                  @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                     <p class="text-red-500 text-xs mt-1">Nom requis</p>
                  }
                </div>

                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Téléphone</label>
                  <input type="tel" formControlName="phone" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition" placeholder="06 12 34 56 78">
                  @if (contactForm.get('phone')?.touched && contactForm.get('phone')?.invalid) {
                     <p class="text-red-500 text-xs mt-1">Téléphone requis</p>
                  }
                </div>

                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Type de demande</label>
                  <select formControlName="subject" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition bg-white">
                    <option value="depannage">Dépannage Urgent</option>
                    <option value="devis">Demande de Devis</option>
                    <option value="info">Information</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea formControlName="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition" placeholder="Décrivez votre besoin..."></textarea>
                   @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
                     <p class="text-red-500 text-xs mt-1">Message requis</p>
                  }
                </div>

                <button type="submit" [disabled]="contactForm.invalid" class="w-full bg-primary text-secondary font-bold py-4 rounded-lg hover:bg-yellow-400 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  Envoyer ma demande
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      subject: ['devis'],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.submitted.set(true);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  reset() {
    this.submitted.set(false);
    this.contactForm.reset({ subject: 'devis' });
  }
}