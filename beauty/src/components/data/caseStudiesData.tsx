import { Lock, ShieldCheck, Sun, Zap, HardHat, Droplets } from 'lucide-react';


export interface ProjectImage {
  url: string;
  caption: string;
}

export interface CaseStudy {
  sector: 'Solar' | 'Security' | 'Electrical' | 'Civil'; 
  title: string;
  desc: string;
  icon: JSX.Element;
  images: ProjectImage[];
}

export const caseStudies: CaseStudy[] = [
  {
    sector: "Security", 
    title: "Advanced Surveillance Biometric Integration",
    desc: "Deployment of surveillance cameras and multi-modal facial recognition and biometric entry systems for homes, businesses areas and corporate headquarters.",
    icon: <Lock size={20} />,
    images: [
      { url: "/images/security/cameraOnFence.jpeg", caption: "Camera on the fence" },
      { url: "/images/security/smartLock.jpeg", caption: "Smart authentication device" },
      { url: "/images/security/intalledCameraFeed.jpeg", caption: "Live camera feed from an installed security camera." },
      { url: "/images/security/biometric.jpeg", caption: "Security access using biometric machine." },
      { url: "/images/security/camera.jpeg", caption: "CCTV system installation , 2MP tiandy camera at residential home in zana." },
      { url: "/images/security/door control access.jpeg", caption: "Door control access using facial recognition device." },
      { url: "/images/security/solarPoweredInfraRedSecuriityCamera.jpeg", caption: "Integrated dashboard for real-time traffic logs." }
    ]
  },
  {
    sector: "Solar", 
    title: "Solar System Installation and Maintenance",
    desc: "Designing and installation of efficient solar systems using high quality materials guaranteed to meet your needs. We also offer solar system maintenance and repair services",
    icon: <Sun size={20} />, 
    images: [
      { url: "/images/solar/roofSolarInstallation1.jpeg", caption: "Rooftop photovoltaic array installation for maximum yield." },
      { url: "/images/solar/roofSolarInstallation2.jpeg", caption: "Rooftop solar solar panel installation." },
      { url: "/images/solar/roofSolarInstallation3.jpeg", caption: "Rooftop solar solar panel installation." },
      { url: "/images/solar/solar system installation.jpeg", caption: "Installation of solar system of 4batteries @ 200AH GEL batteries with hybrid inverter of 1.5kw at Namugongo site." },
      { url: "/images/solar/solar system with lithiumn b.jpeg", caption: "Solar system with lithium battery& hybrid inverter capacity of 1.5kw." },
      { url: "/images/solar/solar light.jpeg", caption: "Solar lights of 400w installed at Mulongo # cancer Institute." },
      { url: "/images/solar/solar light and camera.jpeg", caption: "Solar light of 400W & solar camera mode of seven star Hikivision with Dual lens at Mulongo cancer Institute." },
      { url: "/images/solar/solar hybrid system.jpeg", caption: "Solar hybrid system with advanced technologies & monitoring system" },
      { url: "/images/solar/solar hospital.jpeg", caption: "Solar panel mounted at hospital." },
      { url: "/images/solar/soalr internal affairs.jpeg", caption: "Rooftop solar solar panel installation." },
      { url: "/images/solar/pallisa solar.jpeg", caption: "Solar lights # blue carbon 6.0& 3.0 being tested for installation in Pallisa district." },
      { url: "/images/solar/municiple solar light.jpeg", caption: "Municipal solar light installation at Gulu high way." },
      { url: "/images/solar/solar rukunjiri.jpeg", caption: "Solar panel mounting on top roof in Rukungiri residential area." },
      { url: "/images/solar/solarStreetLights.jpeg", caption: "Solar lights installation of 6.0 with 180w lamp panel & 18mm metallic pole." }
    ]
  },
  {
    sector: "Civil", 
    title: "Structural Design & Infrastructure Development",
    desc: "Comprehensive civil engineering services including structural design, apartment foundation slabs with integrated piping systems, and full-scale construction management.",
    icon: <Sun size={20} />, 
    images: [
      { url: "/images/infrastructure/construction site.jpeg", caption: "Construction site." },
      { url: "/images/infrastructure/slab.jpeg", caption: "Piping slab of apartment." },
      { url: "/images/infrastructure/slab2.jpeg", caption: "Piping slab of apartment." },
      { url: "/images/infrastructure/structure design.jpeg", caption: "Structure design." }
    ]
  },
  {
    sector: "Electrical", 
    title: "Industrial & Residential Electrical Infrastructure",
    desc: "Large-scale electrical deployments featuring 11KV high-voltage industrial installations, automated control panels (MCCB/ACB), and modern fire alarm system integration.",
    icon: <Sun size={20} />, 
    images: [
      { url: "/images/power/Electrical maintenance.jpeg", caption: "Electrical maintenance." },
      { url: "/images/power/house lights.jpeg", caption: "Lighting residential house in kyanja apartment." },
      { url: "/images/power/house light2.jpeg", caption: "Lighting with modern design & Desirable bulbs of 28 wattages." },
      { url: "/images/power/panel room.jpeg", caption: "Panel room with panels contain ACB 600A for utility." },
      { url: "/images/power/industrial installation.jpeg", caption: "Industrial installation at Hoima  , utility section for high voltage 11KV." },
      { url: "/images/power/fire alarm system.jpeg", caption: "Fire alarm system with modern technology." },
      { url: "/images/power/cables.jpeg", caption: "Cables arrangement on Aluminum cable tray at Hoima." },
      { url: "/images/power/electrical rising.jpeg", caption: "Electrical Rising with ceiling suspenders for industrial at Hoima." },
      { url: "/images/power/induction motor.jpeg", caption: "Production section, three phase induction motor for industrial." },
      { url: "/images/power/control panel.jpeg", caption: "Electric control panels with MCCB, Isolator& Circuit breaker (CB)." }
    ]
  }
];