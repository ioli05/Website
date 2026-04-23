'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Activity, Heart, Bone, Stethoscope, Microscope, CheckCircle, Loader2, ChevronLeft, ChevronRight, ScanFace, Syringe, } from 'lucide-react';
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
  { icon: Bone, name: 'Ortopedie', desc: 'Articulații și oase' },
  { icon: Activity, name: 'Reumatologie', desc: 'Boli reumatice' },
  { icon: Heart, name: 'Cardiologie', desc: 'Inimă și vasele' },
  { icon: Microscope, name: 'Radiologie', desc: 'Investigații imagistice' },
  { icon: ScanFace, name: 'Dermatologie', desc: '' },
  { icon: Syringe, name: 'Chirurgie plastică', desc: '' },
];

const teamMembers = [
  { name: 'Dr. Zubaci Radu', specialty: 'Medic primar Ortopedie', image: 'photo-1612349317150-e413f6a5b16d' },
  { name: 'Dr. Nițan Ovidiu', specialty: 'Medic specialist Ortopedie', image: 'photo-1582750433449-648ed127bb54' },
  { name: 'Dr. Nițan Ionela', specialty: 'Medic Specialist Cardiologie', image: 'photo-1559839734-2b71ea197ec2' },
  { name: 'Dr. Popescu Maria', specialty: 'Medic Specialist Radiologie', image: 'photo-1594824476967-48c8b964273f' },
  { name: 'Dr. Ionescu Andrei', specialty: 'Medic specialist Reumatologie', image: 'photo-1537368910025-700350fe46c7' },
  { name: 'Dr. Dumitrescu Elena', specialty: 'Medic Primar Cardiologie', image: 'photo-1573496359142-b8d87734a5a2' },
  { name: 'Dr. Marinescu Alexandru', specialty: 'Medic specialist Ortopedie', image: 'photo-1622253692010-333f2da6031d' },
  { name: 'Dr. Stancu Ana', specialty: 'Medic Specialist Dermatologie', image: 'photo-1551836022-d5d88e9218df' },
  { name: 'Dr. Radu Andreea', specialty: 'Medic Specialist Ortopedie', image: 'photo-1651008376811-b8ba0a741357' },
  { name: 'Dr. Popa Cristian', specialty: 'Medic Primar Radiologie', image: 'photo-1611605698335-8b1569810432' },
  { name: 'Dr. Gheorghe Mihai', specialty: 'Medic specialist Cardiologie', image: 'photo-1582750433449-648ed127bb54' },
];

const specialtyOptions = [
  'Ortopedie',
  'Cardiologie',
  'Radiologie',
  'Reumatologie',
  'Chirurgie Plastică',
  'Dermatologie',
];

// Calculăm slide-urile pentru carousel
const getSlidesData = (members: typeof teamMembers, perView: number) => {
  const slides: typeof teamMembers[] = [];
  for (let i = 0; i < members.length; i += perView) {
    slides.push(members.slice(i, i + perView));
  }
  return slides;
};

// Hook pentru a detecta dacă suntem pe tabletă
function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsTablet(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isTablet;
}

function useDeviceType() {
  const [device, setDevice] = useState("mobile");

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isLandscape = width > height;

      if (width >= 1024) {
        setDevice("desktop");
      } else if (width >= 768) {
        // telefon landscape vs tabletă
        setDevice(isLandscape ? "mobile-landscape" : "tablet");
      } else {
        setDevice("mobile");
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return device;
}

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    message: '',
  });

  const isTablet = useIsTablet();
  const perView = isTablet ? 2 : 5;
  const slides = useMemo(() => getSlidesData(teamMembers, perView), [perView]);
  const totalSlides = slides.length;
  const device = useDeviceType();

  // Reset slide când se schimbă viewport-ul
  useEffect(() => {
    setCurrentSlide(0);
  }, [perView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          specialty: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Loop infinit - la ultima pagină revine la prima
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">

            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[oklch(0.25_0.02_260)]">
                Îngrijire medicală{' '}
                <span className="text-[oklch(0.45_0.15_250)]">profesionistă</span>{' '}
                pentru o viață mai{' '}
                <span className="text-[oklch(0.45_0.15_250)]">sănătoasă</span>
              </h1>

              <p className="text-lg text-[oklch(0.45_0.05_260)] max-w-xl mx-auto lg:mx-0">
                Oferim servicii medicale complete, realizate de specialiști cu experiență,
                într-un mediu modern și sigur.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="#programare"
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-[oklch(0.45_0.15_250)] px-6 text-sm font-medium text-white shadow-md hover:bg-[oklch(0.40_0.15_250)] transition-colors text-center"
                >
                  Programează o<br />consultație
                </Link>

                <Link
                  href="#servicii"
                  className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-[oklch(0.45_0.15_250)] px-6 text-sm font-medium text-[oklch(0.45_0.15_250)] hover:bg-[oklch(0.45_0.15_250)] hover:text-white transition-colors"
                >
                  Vezi serviciile
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden md:flex justify-center">
              <div className="relative w-[520px] h-[450px] lg:w-[580px] lg:h-[500px] bg-transparent">
                <Image
                  src="https://cdn.chat2db-ai.com/app/avatar/custom/98c49ef5-3477-444b-b1e5-e4ffb0d9bcd5_unknown.webp"
                  alt="Familie fericită la un medical checkup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Specialties Section */}
      <section className="py-12 bg-white w-full rounded-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.06),0_10px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Title + Subtitle */}
         <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.25_0.02_260)] mb-2">
            Specialități medicale
          </h2>
          <p className="text-sm md:text-base text-[oklch(0.45_0.05_260)] mx-auto text-center whitespace-normal">
            Oferim o gamă variată de specialități medicale pentru a vă asigura îngrijire completă într-un singur loc.
          </p>

        </div>


          {/* Desktop: 6 in row */}
          <div className="hidden md:grid md:grid-cols-6 gap-4 lg:gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.name}
              className="flex flex-col items-center text-center p-3 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="h-24 w-24 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mb-3">
                <specialty.icon className="h-14 w-14 text-[oklch(0.45_0.15_250)]" />
              </div>
              <h3 className="font-semibold text-sm text-[oklch(0.25_0.02_260)]">
                {specialty.name}
              </h3>
            </div>
          ))}
        </div>


          {/* Mobile layout */}
         <div className="md:hidden">
          {/* First row */}
          <div className="flex justify-center gap-4">
            {specialties.slice(0, 2).map((specialty) => (
              <div key={specialty.name} className="flex flex-col items-center text-center p-2 w-1/3">
                <div className="h-20 w-20 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mb-2">
                  <specialty.icon className="h-10 w-10 text-[oklch(0.45_0.15_250)]" />
                </div>
                <h3 className="font-medium text-xs text-[oklch(0.25_0.02_260)]">{specialty.name}</h3>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-center gap-4 mt-4">
            {specialties.slice(2, 4).map((specialty) => (
              <div key={specialty.name} className="flex flex-col items-center text-center p-2 w-1/3">
                <div className="h-20 w-20 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mb-2">
                  <specialty.icon className="h-10 w-10 text-[oklch(0.45_0.15_250)]" />
                </div>
                <h3 className="font-medium text-xs text-[oklch(0.25_0.02_260)]">{specialty.name}</h3>
              </div>
            ))}
          </div>

          {/* Third row */}
          <div className="flex justify-center gap-4 mt-4">
            {specialties.slice(5, 6).map((specialty) => (
              <div key={specialty.name} className="flex flex-col items-center text-center p-2 w-1/3">
                <div className="h-20 w-20 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mb-2">
                  <specialty.icon className="h-10 w-10 text-[oklch(0.45_0.15_250)]" />
                </div>
                <h3 className="font-medium text-xs text-[oklch(0.25_0.02_260)]">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>


          {/* Link */}
         {/* BUTTON RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/servicii"
                  className="
                    inline-flex 
                    h-12 
                    items-center 
                    justify-center 
                    text-sm 
                    font-medium 
                    text-[oklch(0.45_0.15_250)] 
                    hover:text-[oklch(0.35_0.15_250)] 
                    transition-colors
                  "
                >
                  Consultă toate serviciile
                  <ArrowRight className="ml-2 h-4 w-4 transition-colors" />
                </Link>
              </div>

        </div>
      </section>


      {/* Services Preview Section */}
      <section id="servicii" className="relative py-20 overflow-hidden">

        <div 
          className="
            absolute 
            top-30
            left-0              /* mobil: începe din stânga */
            md:left-[5%]        /* desktop/tabletă: 5% ca înainte */
            w-[130%] 
            h-[500px] 
            bg-[rgba(37,134,204,0.37)] 
            -skew-y-2 
            opacity-90
          "
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="relative flex justify-center order-1">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4]">
                <Image
                  src="/images/medic2.webp"
                  alt="Medic specialist"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* TEXT + BOX */}
            <div className="space-y-10 order-2 text-center lg:text-left">

              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.25_0.02_260)] leading-tight">
                Servicii medicale profesionale și îngrijire de încredere
              </h2>

              <p className="text-[oklch(0.45_0.05_260)] max-w-xl mx-auto lg:mx-0">
                Clinica noastră oferă servicii medicale moderne, susținute de o echipă de specialiști
                cu experiență și rezultate dovedite. Ne dedicăm fiecărui caz în parte, punând accent
                pe profesionalism, empatie și soluții medicale adaptate nevoilor fiecărui pacient.
              </p>

              {/* STATS BOX — 3 COLUMNS */}
              <div className="
                bg-white/70 
                backdrop-blur-md 
                p-6 
                rounded-2xl 
                shadow-lg 
                max-w-md 
                mx-auto 
                grid 
                grid-cols-3 
                gap-6 
                text-center
              ">
                <div>
                  <p className="text-3xl font-bold text-[oklch(0.45_0.15_250)]">1000+</p>
                  <p className="text-xs text-[oklch(0.35_0.03_260)]">Pacienți tratați</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-[oklch(0.45_0.15_250)]">15+</p>
                  <p className="text-xs text-[oklch(0.35_0.03_260)]">Ani experiență</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-[oklch(0.45_0.15_250)]">5</p>
                  <p className="text-xs text-[oklch(0.35_0.03_260)]">Specialități</p>
                </div>
              </div>

              {/* BUTTON RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/servicii"
                  className="
                    inline-flex 
                    h-12 
                    items-center 
                    justify-center 
                    text-sm 
                    font-medium 
                    text-[oklch(0.45_0.15_250)] 
                    hover:text-[oklch(0.35_0.15_250)] 
                    transition-colors
                  "
                >
                  Consultă toate serviciile
                  <ArrowRight className="ml-2 h-4 w-4 transition-colors" />
                </Link>
              </div>


            </div>

          </div>
        </div>
      </section>


      {/* Team Carousel Section */}
      <section id="echipa" className="py-16 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
       
        <div className="w-full max-w-7xl mx-auto px-4">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.25_0.02_260)] mb-3">
              Echipa noastră
            </h2>
            <p className="text-sm md:text-base text-[oklch(0.45_0.05_260)] mx-auto whitespace-nowrap overflow-hidden text-ellipsis hidden md:block">
              O echipă de medici cu expertiză vastă, pregătită să vă ofere îngrijire la cele mai înalte standarde.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className={`relative mx-auto ${isTablet ? 'max-w-lg' : 'max-w-6xl'}`}>

            {/* Slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentSlide *
                    (100 /
                      (device === 'desktop'
                        ? 5
                        : device === 'mobile-landscape'
                        ? 3
                        : 2))
                  }%)`
                }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="flex justify-center">
                      {slide.map((member, index) => (
                        <div
                          key={index}
                          className={`flex-shrink-0 px-4 ${
                            device === 'desktop'
                              ? 'w-1/5'
                              : device === 'mobile-landscape'
                              ? 'w-1/3'
                              : 'w-1/2'
                          }`}
                        >
                          <div className="text-center p-4">
                            <div className="relative h-32 w-32 md:h-40 md:w-40 mx-auto mb-4 rounded-full overflow-hidden bg-[oklch(0.93_0.05_250)]">
                              <Image
                                src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                                alt={member.name}
                                fill
                                sizes={isTablet ? '128px' : '160px'}
                                className="object-cover"
                              />
                            </div>
                            <h3 className="font-semibold text-sm md:text-base text-[oklch(0.25_0.02_260)]">
                              {member.name}
                            </h3>
                            <p className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] mt-1">
                              {member.specialty}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`
                absolute top-1/2 -translate-y-1/2 
                ${isTablet ? '-left-8' : '-left-14'} 
                h-12 w-12 rounded-full bg-white shadow-lg 
                flex items-center justify-center 
                text-[oklch(0.45_0.15_250)] 
                hover:bg-[oklch(0.45_0.15_250)] hover:text-white 
                transition-colors
              `}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>


            <button
            onClick={nextSlide}
            className={`
              absolute top-1/2 -translate-y-1/2 
              ${isTablet ? '-right-8' : '-right-14'} 
              h-12 w-12 rounded-full bg-white shadow-lg 
              flex items-center justify-center 
              text-[oklch(0.45_0.15_250)] 
              hover:bg-[oklch(0.45_0.15_250)] hover:text-white 
              transition-colors
            `}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

            {/* Dots */}
            <div className={`flex justify-center gap-2 ${isTablet ? 'mt-6' : 'mt-8'}`}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'w-6 bg-[oklch(0.45_0.15_250)]'
                      : 'w-2 bg-[oklch(0.45_0.15_250)]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Appointment Form Section */}
      <section id="programare" className="py-16 bg-[oklch(0.93_0.05_250)]">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Image */}
              <div className="hidden lg:block relative">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop"
                  alt="Planificare consultație"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[oklch(0.25_0.02_260)] mb-2">
                  Solicită o programare
                </h2>
                <p className="text-sm text-[oklch(0.45_0.05_260)] mb-6">
                  Completează formularul și te vom contacta pentru confirmare.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label htmlFor="home-name" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Nume
                        </label>
                        <Input
                          id="home-name"
                          placeholder="Numele tău"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="bg-white border-[oklch(0.92_0.02_250)] text-[oklch(0.25_0.02_260)]"
                        />
                      </div>
                      <div className="space-y-1 text-left">
                        <label htmlFor="home-email" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Email
                        </label>
                        <Input
                          id="home-email"
                          type="email"
                          placeholder="email@exemplu.ro"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="bg-white border-[oklch(0.92_0.02_250)] text-[oklch(0.25_0.02_260)]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label htmlFor="home-phone" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Telefon
                        </label>
                        <Input
                          id="home-phone"
                          type="tel"
                          placeholder="+40 721 234 567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                          className="bg-white border-[oklch(0.92_0.02_250)] text-[oklch(0.25_0.02_260)]"
                        />
                      </div>
                      <div className="space-y-1 text-left">
                        <label htmlFor="home-specialty" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                          Specialitate
                        </label>
                        <Select
                          value={formData.specialty}
                          onValueChange={(value) => handleChange('specialty', value)}
                        >
                          <SelectTrigger className="bg-white border-[oklch(0.92_0.02_250)] text-[oklch(0.25_0.02_260)]">
                            <SelectValue placeholder="Alege..." />
                          </SelectTrigger>
                          <SelectContent>
                            {specialtyOptions.map((spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="home-message" className="text-sm font-medium text-[oklch(0.25_0.02_260)]">
                        Mesaj
                      </label>
                      <Textarea
                        id="home-message"
                        placeholder="Descrieți simptomele sau motivul consultației..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="bg-white border-[oklch(0.92_0.02_250)] text-[oklch(0.25_0.02_260)]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[oklch(0.45_0.15_250)] hover:bg-[oklch(0.40_0.15_250)] text-white h-11"
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
                    <h3 className="text-xl font-bold text-[oklch(0.25_0.02_260)] mb-2">
                      Cerere trimisă!
                    </h3>
                    <p className="text-[oklch(0.45_0.05_260)] mb-4">
                      Veți fi contactat în cel mai scurt timp pentru confirmarea programării.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-[oklch(0.45_0.15_250)] text-[oklch(0.45_0.15_250)] bg-transparent hover:bg-[oklch(0.45_0.15_250)]/5"
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
    </>
  );
}
