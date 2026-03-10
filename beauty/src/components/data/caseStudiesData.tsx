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
      { url: "/images/solar/solarStreetLights.jpeg", caption: "Solar powered street light installation." }
    ]
  }
];