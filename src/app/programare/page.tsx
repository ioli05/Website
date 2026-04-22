'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const specialties = [
  'Ortopedie',
  'Cardiologie',
  'Radiologie',
  'Reumatologie',
  'Chirurgie Plastică',
  'Medicină Internă',
];

export default function ProgramarePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[oklch(0.25_0.02_260)] mb-4">
            Solicită o programare
          </h1>
          <p className="text-[oklch(0.45_0.05_260)] max-w-xl mx-auto">
            Suntem aici pentru a vă ajuta. Trimiteți o cerere de programare rapid
            și vă contactăm în cel mai scurt timp posibil.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-16 bg-[oklch(0.93_0.05_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="hidden lg:block relative">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop"
                  alt="Planificare consultație"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Nume
                        </label>
                        <Input
                          id="name"
                          placeholder="Numele tău"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="bg-[oklch(0.96_0.02_250)] border-[oklch(0.92_0.02_250)]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@exemplu.ro"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="bg-[oklch(0.96_0.02_250)] border-[oklch(0.92_0.02_250)]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Număr de telefon
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+40 721 234 567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                          className="bg-[oklch(0.96_0.02_250)] border-[oklch(0.92_0.02_250)]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="specialty" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Specialitate
                        </label>
                        <Select
                          value={formData.specialty}
                          onValueChange={(value) => handleChange('specialty', value)}
                        >
                          <SelectTrigger className="bg-[oklch(0.96_0.02_250)] border-[oklch(0.92_0.02_250)]">
                            <SelectValue placeholder="Alege o specialitate" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                        Mesaj
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Descrieți simptomele sau motivul consultației..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="bg-[oklch(0.96_0.02_250)] border-[oklch(0.92_0.02_250)]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[oklch(0.45_0.15_250)] hover:bg-[oklch(0.40_0.15_250)] text-white h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Se trimite...
                        </>
                      ) : (
                        'Trimiteți'
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="h-16 w-16 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-[oklch(0.45_0.15_250)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[oklch(0.25_0.02_260)] mb-2">
                      Cerere trimisă!
                    </h2>
                    <p className="text-[oklch(0.45_0.05_260)] mb-6">
                      Veți fi contactat în cel mai scurt timp pentru confirmarea
                      programării.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          specialty: '',
                          message: '',
                        });
                      }}
                      className="border-[oklch(0.45_0.15_250)] text-[oklch(0.45_0.15_250)] hover:bg-[oklch(0.45_0.15_250)]/10"
                    >
                      Trimite altă cerere
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[oklch(0.25_0.02_260)] mb-6">
              Sau ne poți contacta direct
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-[oklch(0.45_0.05_260)] mb-1">Telefon</p>
                <a href="tel:+40721234567" className="font-semibold text-[oklch(0.45_0.15_250)] hover:underline">
                  +40 721 234 567
                </a>
              </div>
              <div>
                <p className="text-sm text-[oklch(0.45_0.05_260)] mb-1">Email</p>
                <a href="mailto:contact@orthoxray.ro" className="font-semibold text-[oklch(0.45_0.15_250)] hover:underline">
                  contact@orthoxray.ro
                </a>
              </div>
              <div>
                <p className="text-sm text-[oklch(0.45_0.05_260)] mb-1">Program</p>
                <p className="font-semibold text-[oklch(0.25_0.02_260)]">
                  L-V: 08:00 - 19:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
