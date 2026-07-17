import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaTable,
  FaSearch,
} from "react-icons/fa";
import rodSealsImage from "../../assets/logo_a2z_seals.png";

const rodSealProfiles = [
  "U Cup",
  "K21",
  "UHS",
  "UNS",
  "UNR",
  "UN",
  "DNS",
  "DN",
  "DNR",
  "DHS",
  "UHS C",
  "UNS C",
];

const manufacturers = [
  "NOK",
  "HALLITE",
  "Corteco",
  "Simrit",
  "Merkel",
  "Parker",
  "CFW",
  "SAKAGAMI",
  "SKF",
  "freudenberg",
  "SOG",
  "Kastas",
];

const sealKitApplications = [
  "Arm",
  "Boom",
  "Bucket",
  "Dipper",
  "Slew",
  "Track Adjuster",
  "Main pump",
  "ORing",
  "Stablizer",
  "BackLift",
  "Lift",
  "Steering",
  "DavidBrown / ParkerPump",
  "Blade",
  "Hoist",
  "Out Rigger",
  "Telescopic Cylinder",
  "Break",
  "Dump",
  "Swing",
];

const sealAdvantages = [
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "Long Service Life",
  "OEM Compatibility",
  "Rapid Delivery",
];

const hydraulicSealTypes = [
  "Gland",
  "Rod",
  "Secondary",
  "Rod Wiper and Dust Ring",
  "Dkbi",
  "Wiper",
  "HBY",
  "Secondary Ring",
  "Step",
  "Piston",
  "D",
  "DAS",
  "Metal ring",
  "SPGW",
  "Back Up Ring",
  "BRT",
  "CWR",
  "Double Acting",
  "Floating",
  "Oil",
  "Single Acting",
  "Vee Pack",
  "Wearing and Bearing Strip",
  "Bimetallic bearings",
  "Double Lip",
  "Single Lip",
  "Others",
  "O Rings",
];

const industries = [
  "Mining",
  "Heavy Earth-Moving",
  "Construction",
  "Hydraulic Equipment",
  "Oilfield",
  "Off-Highway",
  "Marine",
  "Industrial",
  "Hydro Power",
  "Forestry",
  "Food",
  "Pharmaceutical",
  "Defense",
  "Chemical Processing",
  "Automotive",
  "Aerospace",
  "Agriculture",
  "Aerial work platforms",
  "Cranes",
  "General industrial machines",
  "Heavy machineries",
  "Hydraulic cylinders",
  "Hydraulic press/ injection",
  "Hydro-pneumatic cylinders",
  "Industrial vehicles",
  "Machine tools",
  "Machines in iron foundries",
  "Robots",
];

const rodSealData = [
  { id: 4, od: 10, ht: 4 },
  { id: 5, od: 12, ht: 5 },
  { id: 5, od: 12, ht: 6 },
  { id: 5, od: 14, ht: 6 },
  { id: 5, od: 15, ht: 6 },
  { id: 6, od: 12, ht: 5 },
  { id: 6, od: 14, ht: 6 },
  { id: 6, od: 15, ht: 6 },
  { id: 6, od: 15, ht: 8 },
  { id: 6, od: 18, ht: 8 },
  { id: 7, od: 12, ht: 4 },
  { id: 7, od: 12, ht: 5 },
  { id: 7, od: 12, ht: 6 },
  { id: 7, od: 14, ht: 5 },
  { id: 8, od: 13, ht: 3 },
  { id: 8, od: 14, ht: 6 },
  { id: 8, od: 14, ht: 8 },
  { id: 8, od: 15, ht: 5 },
  { id: 8, od: 15, ht: 6 },
  { id: 8, od: 15, ht: 8 },
  { id: 8, od: 16, ht: 6 },
  { id: 8, od: 16, ht: 8 },
  { id: 8, od: 18, ht: 8 },
  { id: 8, od: 18, ht: 10 },
  { id: 8, od: 20, ht: 10 },
  { id: 8, od: 22, ht: 10 },
  { id: 9, od: 19, ht: 6 },
  { id: 10, od: 16, ht: 4 },
  { id: 10, od: 16, ht: 5 },
  { id: 10, od: 16, ht: 6 },
  { id: 10, od: 18, ht: 5 },
  { id: 10, od: 18, ht: 6 },
  { id: 10, od: 18, ht: 8 },
  { id: 10, od: 19, ht: 7 },
  { id: 10, od: 20, ht: 6 },
  { id: 10, od: 20, ht: 8 },
  { id: 10, od: 22, ht: 6 },
  { id: 10, od: 22, ht: 8 },
  { id: 11.2, od: 19.2, ht: 5 },
  { id: 12, od: 16, ht: 4 },
  { id: 12, od: 16, ht: 5 },
  { id: 12, od: 16, ht: 6 },
  { id: 12, od: 17, ht: 4 },
  { id: 12, od: 18, ht: 4 },
  { id: 12, od: 18, ht: 5 },
  { id: 12, od: 18, ht: 6 },
  { id: 12, od: 18, ht: 8 },
  { id: 12, od: 19, ht: 5 },
  { id: 12, od: 20, ht: 5 },
  { id: 12, od: 20, ht: 6 },
  { id: 12, od: 20, ht: 8 },
  { id: 12, od: 22, ht: 5 },
  { id: 12, od: 22, ht: 5.5 },
  { id: 12, od: 22, ht: 7 },
  { id: 12, od: 22, ht: 8 },
  { id: 12, od: 24, ht: 6 },
  { id: 12, od: 24, ht: 8 },
  { id: 12, od: 25, ht: 8 },
  { id: 13, od: 18, ht: 5 },
  { id: 13, od: 19, ht: 5 },
  { id: 13, od: 20, ht: 5.5 },
  { id: 14, od: 20, ht: 5 },
  { id: 14, od: 20, ht: 6 },
  { id: 14, od: 22, ht: 5 },
  { id: 14, od: 22, ht: 6 },
  { id: 14, od: 22, ht: 7 },
  { id: 14, od: 22, ht: 8 },
  { id: 14, od: 24, ht: 8 },
  { id: 14, od: 28, ht: 8 },
  { id: 15, od: 22, ht: 5 },
  { id: 15, od: 22, ht: 6 },
  { id: 15, od: 22, ht: 8 },
  { id: 15, od: 23, ht: 5 },
  { id: 15, od: 23, ht: 10 },
  { id: 15, od: 25, ht: 5 },
  { id: 15, od: 25, ht: 7 },
  { id: 15, od: 25, ht: 8 },
  { id: 15, od: 27, ht: 6 },
  { id: 15, od: 28, ht: 10 },
  { id: 15, od: 30, ht: 5.5 },
  { id: 15, od: 30, ht: 8 },
  { id: 15, od: 30, ht: 10 },
  { id: 16, od: 22, ht: 4 },
  { id: 16, od: 22, ht: 5 },
  { id: 16, od: 22, ht: 6 },
  { id: 16, od: 22, ht: 7 },
  { id: 16, od: 22, ht: 8 },
  { id: 16, od: 24, ht: 4 },
  { id: 16, od: 24, ht: 5 },
  { id: 16, od: 24, ht: 6 },
  { id: 16, od: 24, ht: 8 },
  { id: 16, od: 25, ht: 5 },
  { id: 16, od: 26, ht: 5 },
  { id: 16, od: 26, ht: 6 },
  { id: 16, od: 26, ht: 8 },
  { id: 16, od: 28, ht: 6 },
  { id: 16, od: 28, ht: 8 },
  { id: 16, od: 30, ht: 6 },
  { id: 17, od: 27, ht: 5 },
  { id: 17, od: 27, ht: 7 },
  { id: 17, od: 27, ht: 8 },
  { id: 17, od: 32, ht: 10 },
  { id: 18, od: 24, ht: 4 },
  { id: 18, od: 24, ht: 5 },
  { id: 18, od: 24, ht: 8 },
  { id: 18, od: 25, ht: 5 },
  { id: 18, od: 25, ht: 6 },
  { id: 18, od: 26, ht: 5 },
  { id: 18, od: 26, ht: 6 },
  { id: 18, od: 26, ht: 8 },
  { id: 18, od: 28, ht: 6 },
  { id: 18, od: 28, ht: 8 },
  { id: 18, od: 30, ht: 6 },
  { id: 18, od: 30, ht: 8 },
  { id: 18, od: 32, ht: 7 },
  { id: 18, od: 32, ht: 8 },
  { id: 19, od: 24, ht: 5 },
  { id: 19, od: 25, ht: 5 },
  { id: 19, od: 25, ht: 6 },
  { id: 19, od: 25, ht: 7 },
  { id: 19, od: 26, ht: 5 },
  { id: 19, od: 27, ht: 5 },
  { id: 19, od: 27, ht: 6 },
  { id: 19, od: 28, ht: 7 },
  { id: 19, od: 32, ht: 8 },
  { id: 20, od: 26, ht: 5 },
  { id: 20, od: 26, ht: 6 },
  { id: 20, od: 26, ht: 7 },
  { id: 20, od: 27, ht: 5 },
  { id: 20, od: 27, ht: 6 },
  { id: 20, od: 27, ht: 6 },
  { id: 20, od: 28, ht: 5 },
  { id: 20, od: 28, ht: 6 },
  { id: 20, od: 28, ht: 7 },
  { id: 20, od: 28, ht: 8 },
  { id: 20, od: 30, ht: 5 },
  { id: 20, od: 30, ht: 6 },
  { id: 20, od: 30, ht: 8 },
  { id: 20, od: 30, ht: 10 },
  { id: 20, od: 32, ht: 5 },
  { id: 20, od: 32, ht: 6 },
  { id: 20, od: 32, ht: 8 },
  { id: 20, od: 32, ht: 10 },
  { id: 20, od: 35, ht: 6 },
  { id: 20, od: 35, ht: 7 },
  { id: 20, od: 35, ht: 10 },
  { id: 20, od: 38, ht: 6 },
  { id: 20, od: 47, ht: 8 },
  { id: 22, od: 28, ht: 5 },
  { id: 22, od: 28, ht: 6 },
  { id: 22, od: 28, ht: 8 },
  { id: 22, od: 30, ht: 5 },
  { id: 22, od: 30, ht: 5.8 },
  { id: 22, od: 30, ht: 6 },
  { id: 22, od: 30, ht: 8 },
  { id: 22, od: 32, ht: 5 },
  { id: 22, od: 32, ht: 6 },
  { id: 22, od: 32, ht: 7 },
  { id: 22, od: 32, ht: 8 },
  { id: 22, od: 32, ht: 10 },
  { id: 22, od: 35, ht: 6 },
  { id: 22, od: 35, ht: 10 },
  { id: 22, od: 36, ht: 7 },
  { id: 22, od: 40, ht: 10 },
  { id: 22.4, od: 30, ht: 5 },
  { id: 22.4, od: 32.4, ht: 8 },
  { id: 22.5, od: 31.5, ht: 5 },
  { id: 23, od: 35, ht: 6 },
  { id: 23.5, od: 31.5, ht: 5 },
  { id: 24, od: 32, ht: 4 },
  { id: 24, od: 32, ht: 5 },
  { id: 24, od: 32, ht: 7 },
  { id: 24, od: 40, ht: 8 },
  { id: 24, od: 40, ht: 10 },
  { id: 25, od: 32, ht: 6 },
  { id: 25, od: 32, ht: 7 },
  { id: 25, od: 32, ht: 8 },
  { id: 25, od: 33, ht: 5 },
  { id: 25, od: 33, ht: 5.5 },
  { id: 25, od: 33, ht: 6 },
  { id: 25, od: 33, ht: 7 },
  { id: 25, od: 33, ht: 8 },
  { id: 25, od: 33, ht: 10 },
  { id: 25, od: 35, ht: 5 },
  { id: 25, od: 35, ht: 6 },
  { id: 25, od: 35, ht: 7 },
  { id: 25, od: 35, ht: 8 },
  { id: 25, od: 35, ht: 10 },
  { id: 25, od: 38, ht: 6 },
  { id: 25, od: 38, ht: 7 },
  { id: 25, od: 38, ht: 8 },
  { id: 25, od: 38, ht: 10 },
  { id: 25, od: 40, ht: 7 },
  { id: 25, od: 40, ht: 8 },
  { id: 25, od: 40, ht: 10 },
  { id: 25, od: 42, ht: 8 },
  { id: 25, od: 43, ht: 8 },
  { id: 25, od: 45, ht: 10 },
  { id: 25, od: 48, ht: 10 },
  { id: 25, od: 50, ht: 10 },
  { id: 26, od: 36, ht: 5 },
  { id: 28, od: 34, ht: 5 },
  { id: 28, od: 35, ht: 5 },
  { id: 28, od: 35, ht: 6 },
  { id: 28, od: 35, ht: 10 },
  { id: 28, od: 35.5, ht: 5 },
  { id: 28, od: 36, ht: 5 },
  { id: 28, od: 36, ht: 6 },
  { id: 28, od: 36, ht: 7 },
  { id: 28, od: 36, ht: 7.5 },
  { id: 28, od: 36, ht: 8 },
  { id: 28, od: 38, ht: 7 },
  { id: 28, od: 38, ht: 7.3 },
  { id: 28, od: 38, ht: 8 },
  { id: 28, od: 38, ht: 10 },
  { id: 28, od: 40, ht: 6 },
  { id: 28, od: 40, ht: 8 },
  { id: 28, od: 40, ht: 10 },
  { id: 28, od: 43, ht: 10 },
  { id: 30, od: 38, ht: 5 },
  { id: 30, od: 38, ht: 6 },
  { id: 30, od: 38, ht: 7 },
  { id: 30, od: 38, ht: 8 },
  { id: 30, od: 40, ht: 5 },
  { id: 30, od: 40, ht: 6 },
  { id: 30, od: 40, ht: 7 },
  { id: 30, od: 40, ht: 8 },
  { id: 30, od: 40, ht: 10 },
  { id: 30, od: 42, ht: 6 },
  { id: 30, od: 42, ht: 7 },
  { id: 30, od: 42, ht: 8 },
  { id: 30, od: 42, ht: 10.2 },
  { id: 30, od: 43, ht: 6.5 },
  { id: 30, od: 43, ht: 7 },
  { id: 30, od: 43, ht: 10 },
  { id: 30, od: 45, ht: 6 },
  { id: 30, od: 45, ht: 7 },
  { id: 30, od: 45, ht: 10 },
  { id: 30, od: 47, ht: 7 },
  { id: 30, od: 50, ht: 6 },
  { id: 30, od: 50, ht: 8 },
  { id: 30, od: 50, ht: 10 },
  { id: 30, od: 50, ht: 12 },
  { id: 30, od: 52, ht: 10 },
  { id: 31.5, od: 41.5, ht: 6 },
  { id: 32, od: 36, ht: 6 },
  { id: 32, od: 38, ht: 6 },
  { id: 32, od: 38, ht: 7 },
  { id: 32, od: 40, ht: 4 },
  { id: 32, od: 40, ht: 5.5 },
  { id: 32, od: 40, ht: 6 },
  { id: 32, od: 40, ht: 7 },
  { id: 32, od: 40, ht: 8 },
  { id: 32, od: 40, ht: 10 },
  { id: 32, od: 42, ht: 6 },
  { id: 32, od: 42, ht: 7 },
  { id: 32, od: 42, ht: 8 },
  { id: 32, od: 42, ht: 10 },
  { id: 32, od: 45, ht: 6 },
  { id: 32, od: 45, ht: 8 },
  { id: 32, od: 45, ht: 10 },
  { id: 32, od: 46, ht: 10 },
  { id: 32, od: 47, ht: 8 },
  { id: 32, od: 47, ht: 10 },
  { id: 32, od: 48, ht: 8 },
  { id: 32, od: 48, ht: 10 },
  { id: 32, od: 50, ht: 12 },
  { id: 33, od: 40, ht: 8 },
  { id: 34, od: 44, ht: 10 },
  { id: 35, od: 42, ht: 6 },
  { id: 35, od: 42, ht: 7 },
  { id: 35, od: 42, ht: 8 },
  { id: 35, od: 43, ht: 5 },
  { id: 35, od: 43, ht: 6 },
  { id: 35, od: 43, ht: 6.3 },
  { id: 35, od: 43, ht: 7 },
  { id: 35, od: 43, ht: 8 },
  { id: 35, od: 43, ht: 10 },
  { id: 35, od: 45, ht: 5 },
  { id: 35, od: 45, ht: 6 },
  { id: 35, od: 45, ht: 7 },
  { id: 35, od: 45, ht: 8 },
  { id: 35, od: 45, ht: 10 },
  { id: 35, od: 46, ht: 8 },
  { id: 35, od: 46, ht: 10 },
  { id: 35, od: 47, ht: 6 },
  { id: 35, od: 47, ht: 10 },
  { id: 35, od: 48, ht: 6 },
  { id: 35, od: 48, ht: 8 },
  { id: 35, od: 48, ht: 10 },
  { id: 35, od: 50, ht: 9 },
  { id: 35, od: 50, ht: 10 },
  { id: 35, od: 50, ht: 11.5 },
  { id: 35, od: 50, ht: 12 },
  { id: 35, od: 51, ht: 10 },
  { id: 35, od: 52, ht: 8 },
  { id: 35, od: 55, ht: 10.2 },
  { id: 35, od: 58, ht: 10 },
  { id: 35, od: 65, ht: 12 },
  { id: 35.5, od: 45, ht: 6 },
  { id: 36, od: 46, ht: 9 },
  { id: 36, od: 50, ht: 8 },
  { id: 37, od: 47, ht: 7 },
  { id: 37, od: 47, ht: 8 },
  { id: 37, od: 47, ht: 10 },
  { id: 37, od: 57, ht: 7 },
  { id: 37, od: 57, ht: 10 },
  { id: 38, od: 44, ht: 5 },
  { id: 38, od: 44, ht: 5.3 },
  { id: 38, od: 45, ht: 7 },
  { id: 38, od: 45, ht: 8 },
  { id: 38, od: 46, ht: 6 },
  { id: 38, od: 46, ht: 6 },
  { id: 38, od: 48, ht: 6 },
  { id: 38, od: 48, ht: 8 },
  { id: 38, od: 48, ht: 10 },
  { id: 38, od: 50, ht: 6 },
  { id: 38, od: 50, ht: 9 },
  { id: 38, od: 50, ht: 10 },
  { id: 38, od: 51, ht: 10 },
  { id: 38, od: 52, ht: 10 },
  { id: 38, od: 53, ht: 10 },
  { id: 38, od: 54, ht: 10 },
  { id: 38, od: 55, ht: 6 },
  { id: 38, od: 55, ht: 8 },
  { id: 38, od: 55, ht: 10 },
  { id: 38, od: 58, ht: 10 },
  { id: 38, od: 60, ht: 10 },
  { id: 38, od: 62, ht: 12 },
  { id: 40, od: 48, ht: 6 },
  { id: 40, od: 48, ht: 8 },
  { id: 40, od: 50, ht: 6 },
  { id: 40, od: 50, ht: 6.5 },
  { id: 40, od: 50, ht: 7 },
  { id: 40, od: 50, ht: 7.3 },
  { id: 40, od: 50, ht: 8 },
  { id: 40, od: 50, ht: 9 },
  { id: 40, od: 50, ht: 10 },
  { id: 40, od: 52, ht: 8 },
  { id: 40, od: 52, ht: 10 },
  { id: 40, od: 55, ht: 6.5 },
  { id: 40, od: 55, ht: 7 },
  { id: 40, od: 55, ht: 7.2 },
  { id: 40, od: 55, ht: 8 },
  { id: 40, od: 55, ht: 9 },
  { id: 40, od: 55, ht: 10 },
  { id: 40, od: 56, ht: 10 },
  { id: 40, od: 56, ht: 12 },
  { id: 40, od: 58, ht: 10 },
  { id: 40, od: 60, ht: 10 },
  { id: 40, od: 60, ht: 12 },
  { id: 40, od: 65, ht: 10 },
  { id: 40, od: 65, ht: 12 },
  { id: 42, od: 47, ht: 6 },
  { id: 42, od: 50, ht: 6 },
  { id: 42, od: 52, ht: 8 },
  { id: 42, od: 52, ht: 10 },
  { id: 42, od: 55, ht: 8 },
  { id: 42, od: 55, ht: 10 },
  { id: 43, od: 63, ht: 10 },
  { id: 44, od: 50, ht: 10 },
  { id: 44.5, od: 57.15, ht: 9.52 },
  { id: 45, od: 53, ht: 6 },
  { id: 45, od: 53, ht: 8 },
  { id: 45, od: 55, ht: 5 },
  { id: 45, od: 55, ht: 6.5 },
  { id: 45, od: 55, ht: 7 },
  { id: 45, od: 55, ht: 7.3 },
  { id: 45, od: 55, ht: 8 },
  { id: 45, od: 55, ht: 10 },
  { id: 45, od: 56, ht: 7 },
  { id: 45, od: 57, ht: 8 },
  { id: 45, od: 57, ht: 9 },
  { id: 45, od: 60, ht: 9 },
  { id: 45, od: 60, ht: 10.2 },
  { id: 45, od: 60, ht: 11.4 },
  { id: 45, od: 60, ht: 12.5 },
  { id: 45, od: 62, ht: 13 },
  { id: 45, od: 63, ht: 10 },
  { id: 45, od: 63, ht: 12 },
  { id: 45, od: 65, ht: 6 },
  { id: 45, od: 65, ht: 10 },
  { id: 45, od: 65, ht: 12 },
  { id: 45, od: 67, ht: 8 },
  { id: 45, od: 67, ht: 10 },
  { id: 45, od: 70, ht: 10 },
  { id: 45, od: 70, ht: 11 },
  { id: 45, od: 70, ht: 16 },
  { id: 47, od: 57, ht: 6 },
  { id: 47, od: 57, ht: 7 },
  { id: 47, od: 57, ht: 8 },
  { id: 47, od: 57, ht: 9 },
  { id: 47, od: 57, ht: 10 },
  { id: 47, od: 72, ht: 16 },
  { id: 48, od: 58, ht: 6 },
  { id: 48, od: 58, ht: 6 },
  { id: 48, od: 58, ht: 7 },
  { id: 48, od: 60, ht: 8 },
  { id: 48, od: 60, ht: 9 },
  { id: 48, od: 60, ht: 10 },
  { id: 48, od: 60, ht: 12 },
  { id: 48, od: 63, ht: 6 },
  { id: 48, od: 63, ht: 11.5 },
  { id: 48, od: 65, ht: 10.2 },
  { id: 48.5, od: 58.7, ht: 6 },
  { id: 50, od: 57, ht: 10 },
  { id: 50, od: 58, ht: 7 },
  { id: 50, od: 58, ht: 8 },
  { id: 50, od: 60, ht: 6 },
  { id: 50, od: 60, ht: 6.4 },
  { id: 50, od: 60, ht: 7 },
  { id: 50, od: 60, ht: 8 },
  { id: 50, od: 60, ht: 10 },
  { id: 50, od: 60, ht: 11 },
  { id: 50, od: 60, ht: 12 },
  { id: 50, od: 62, ht: 6 },
  { id: 50, od: 62, ht: 9.5 },
  { id: 50, od: 62, ht: 10 },
  { id: 50, od: 63, ht: 6 },
  { id: 50, od: 63, ht: 6.5 },
  { id: 50, od: 63, ht: 7 },
  { id: 50, od: 63, ht: 8 },
  { id: 50, od: 63, ht: 10 },
  { id: 50, od: 63, ht: 15 },
  { id: 50, od: 65, ht: 6 },
  { id: 50, od: 65, ht: 8 },
  { id: 50, od: 65, ht: 9 },
  { id: 50, od: 65, ht: 10 },
  { id: 50, od: 65, ht: 10.2 },
  { id: 50, od: 65, ht: 12 },
  { id: 50, od: 66, ht: 12 },
  { id: 50, od: 68, ht: 10 },
  { id: 50, od: 70, ht: 10 },
  { id: 50, od: 70, ht: 12 },
  { id: 50, od: 72, ht: 9 },
  { id: 50, od: 72, ht: 10 },
  { id: 50, od: 72, ht: 12 },
  { id: 50, od: 75, ht: 10 },
  { id: 50, od: 80, ht: 12 },
  { id: 50.8, od: 63.5, ht: 9.5 },
  { id: 52, od: 60, ht: 8 },
  { id: 52, od: 62, ht: 7 },
  { id: 52, od: 62, ht: 10 },
  { id: 52, od: 62, ht: 12 },
  { id: 52, od: 65, ht: 8.5 },
  { id: 53, od: 63, ht: 6 },
  { id: 53, od: 63, ht: 6.5 },
  { id: 53, od: 63, ht: 8 },
  { id: 53, od: 63, ht: 10 },
  { id: 53, od: 65, ht: 8 },
  { id: 53, od: 73, ht: 12 },
  { id: 55, od: 63, ht: 8 },
  { id: 55, od: 65, ht: 5 },
  { id: 55, od: 65, ht: 6 },
  { id: 55, od: 65, ht: 6.5 },
  { id: 55, od: 65, ht: 7.5 },
  { id: 55, od: 65, ht: 8 },
  { id: 55, od: 65, ht: 10 },
  { id: 55, od: 65, ht: 12 },
  { id: 55, od: 68, ht: 7 },
  { id: 55, od: 68, ht: 10 },
  { id: 55, od: 70, ht: 6 },
  { id: 55, od: 70, ht: 7 },
  { id: 55, od: 70, ht: 9 },
  { id: 55, od: 70, ht: 10 },
  { id: 55, od: 70, ht: 11.5 },
  { id: 55, od: 70, ht: 12 },
  { id: 55, od: 71, ht: 12 },
  { id: 55, od: 72, ht: 8 },
  { id: 55, od: 72, ht: 12 },
  { id: 55, od: 75, ht: 9 },
  { id: 55, od: 75, ht: 10 },
  { id: 55, od: 75, ht: 12 },
  { id: 55, od: 78, ht: 7 },
  { id: 55, od: 78, ht: 10 },
  { id: 55, od: 80, ht: 10 },
  { id: 55, od: 80, ht: 12 },
  { id: 56, od: 66, ht: 6 },
  { id: 56, od: 76, ht: 12 },
  { id: 57, od: 65, ht: 5 },
  { id: 57, od: 77, ht: 10 },
  { id: 58, od: 68, ht: 6 },
  { id: 58, od: 68, ht: 8 },
  { id: 58, od: 72, ht: 12 },
  { id: 58, od: 80, ht: 15 },
  { id: 60, od: 68, ht: 6 },
  { id: 60, od: 68, ht: 8 },
  { id: 60, od: 68, ht: 12 },
  { id: 60, od: 68, ht: 13.5 },
  { id: 60, od: 70, ht: 7 },
  { id: 60, od: 70, ht: 8 },
  { id: 60, od: 70, ht: 10 },
  { id: 60, od: 70, ht: 12 },
  { id: 60, od: 71, ht: 7 },
  { id: 60, od: 72, ht: 10 },
  { id: 60, od: 73, ht: 12 },
  { id: 60, od: 75, ht: 9 },
  { id: 60, od: 75, ht: 10 },
  { id: 60, od: 75, ht: 12 },
  { id: 60, od: 75, ht: 15 },
  { id: 60, od: 76, ht: 12 },
  { id: 60, od: 80, ht: 10 },
  { id: 60, od: 80, ht: 11 },
  { id: 60, od: 80, ht: 12 },
  { id: 60, od: 85, ht: 12 },
  { id: 60, od: 90, ht: 15 },
  { id: 61, od: 71, ht: 6 },
  { id: 62, od: 72, ht: 8 },
  { id: 62, od: 82, ht: 12 },
  { id: 63, od: 73, ht: 6 },
  { id: 63, od: 73, ht: 6.5 },
  { id: 63, od: 73, ht: 8 },
  { id: 63, od: 73, ht: 10 },
  { id: 63, od: 73, ht: 12 },
  { id: 63, od: 75, ht: 10 },
  { id: 63, od: 78, ht: 10 },
  { id: 63, od: 78, ht: 12 },
  { id: 63, od: 83, ht: 12 },
  { id: 63, od: 83, ht: 15 },
  { id: 65, od: 73, ht: 5 },
  { id: 65, od: 73, ht: 6 },
  { id: 65, od: 73, ht: 7 },
  { id: 65, od: 73, ht: 8 },
  { id: 65, od: 73, ht: 9 },
  { id: 65, od: 73, ht: 12 },
  { id: 65, od: 75, ht: 6 },
  { id: 65, od: 75, ht: 8 },
  { id: 65, od: 75, ht: 10 },
  { id: 65, od: 75, ht: 12 },
  { id: 65, od: 76, ht: 9 },
  { id: 65, od: 77, ht: 10 },
  { id: 65, od: 78, ht: 10 },
  { id: 65, od: 78, ht: 12 },
  { id: 65, od: 78, ht: 12.5 },
  { id: 65, od: 79, ht: 10 },
  { id: 65, od: 80, ht: 8 },
  { id: 65, od: 80, ht: 9 },
  { id: 65, od: 80, ht: 10 },
  { id: 65, od: 80, ht: 11 },
  { id: 65, od: 80, ht: 12 },
  { id: 65, od: 80, ht: 13 },
  { id: 65, od: 85, ht: 10 },
  { id: 65, od: 85, ht: 12 },
  { id: 65, od: 85, ht: 15 },
  { id: 65, od: 90, ht: 12 },
  { id: 65, od: 90, ht: 15 },
  { id: 66, od: 76, ht: 6 },
  { id: 67, od: 77, ht: 6 },
  { id: 67, od: 77, ht: 10 },
  { id: 67, od: 87, ht: 12 },
  { id: 70, od: 78, ht: 6 },
  { id: 70, od: 78, ht: 8 },
  { id: 70, od: 78, ht: 10 },
  { id: 70, od: 80, ht: 6 },
  { id: 70, od: 80, ht: 6.5 },
  { id: 70, od: 80, ht: 8 },
  { id: 70, od: 80, ht: 9 },
  { id: 70, od: 80, ht: 10 },
  { id: 70, od: 80, ht: 12 },
  { id: 70, od: 83, ht: 10 },
  { id: 70, od: 84, ht: 10 },
  { id: 70, od: 85, ht: 5.5 },
  { id: 70, od: 85, ht: 8 },
  { id: 70, od: 85, ht: 9 },
  { id: 70, od: 85, ht: 10 },
  { id: 70, od: 85, ht: 11.4 },
  { id: 70, od: 85, ht: 12 },
  { id: 70, od: 88, ht: 9 },
  { id: 70, od: 88, ht: 10 },
  { id: 70, od: 88, ht: 12 },
  { id: 70, od: 90, ht: 10 },
  { id: 70, od: 90, ht: 12 },
  { id: 70, od: 90, ht: 15 },
  { id: 70, od: 95, ht: 10 },
  { id: 70, od: 95, ht: 12 },
  { id: 70, od: 95, ht: 13 },
  { id: 71, od: 80, ht: 6 },
  { id: 71, od: 91, ht: 12 },
  { id: 72, od: 85, ht: 10 },
  { id: 73, od: 85, ht: 10 },
  { id: 75, od: 85, ht: 6 },
  { id: 75, od: 85, ht: 8 },
  { id: 75, od: 85, ht: 10 },
  { id: 75, od: 85, ht: 12 },
  { id: 75, od: 90, ht: 10 },
  { id: 75, od: 90, ht: 12 },
  { id: 75, od: 95, ht: 10 },
  { id: 75, od: 95, ht: 12 },
  { id: 75, od: 95, ht: 13 },
  { id: 75, od: 95, ht: 15 },
  { id: 75, od: 100, ht: 12 },
  { id: 76, od: 86, ht: 6 },
  { id: 76, od: 88, ht: 9.5 },
  { id: 76, od: 88, ht: 10 },
  { id: 76, od: 95, ht: 9.52 },
  { id: 76.5, od: 90.5, ht: 10 },
  { id: 77, od: 87, ht: 12 },
  { id: 77, od: 88, ht: 12 },
  { id: 80, od: 88, ht: 8 },
  { id: 80, od: 90, ht: 6 },
  { id: 80, od: 90, ht: 6.5 },
  { id: 80, od: 90, ht: 7 },
  { id: 80, od: 90, ht: 9 },
  { id: 80, od: 90, ht: 10 },
  { id: 80, od: 90, ht: 12 },
  { id: 80, od: 92, ht: 7 },
  { id: 80, od: 92, ht: 10 },
  { id: 80, od: 93, ht: 10 },
  { id: 80, od: 93, ht: 12 },
  { id: 80, od: 95, ht: 9 },
  { id: 80, od: 95, ht: 10 },
  { id: 80, od: 95, ht: 11.4 },
  { id: 80, od: 95, ht: 12 },
  { id: 80, od: 100, ht: 8 },
  { id: 80, od: 100, ht: 10 },
  { id: 80, od: 100, ht: 12 },
  { id: 80, od: 100, ht: 13 },
  { id: 80, od: 100, ht: 15 },
  { id: 80, od: 105, ht: 10 },
  { id: 80, od: 105, ht: 12 },
  { id: 80, od: 110, ht: 9 },
  { id: 80, od: 110, ht: 15 },
  { id: 83.5, od: 93.5, ht: 6 },
  { id: 85, od: 95, ht: 6 },
  { id: 85, od: 95, ht: 7 },
  { id: 85, od: 95, ht: 8.5 },
  { id: 85, od: 95, ht: 9.5 },
  { id: 85, od: 95, ht: 10 },
  { id: 85, od: 95, ht: 12 },
  { id: 85, od: 100, ht: 9 },
  { id: 85, od: 100, ht: 10 },
  { id: 85, od: 100, ht: 12 },
  { id: 85, od: 100, ht: 15 },
  { id: 85, od: 105, ht: 10 },
  { id: 85, od: 105, ht: 12 },
  { id: 85, od: 105, ht: 13 },
  { id: 85, od: 105, ht: 16 },
  { id: 86, od: 96, ht: 6 },
  { id: 87, od: 95, ht: 12 },
  { id: 88, od: 98, ht: 6 },
  { id: 88, od: 100, ht: 15 },
  { id: 90, od: 100, ht: 6 },
  { id: 90, od: 100, ht: 8 },
  { id: 90, od: 100, ht: 9 },
  { id: 90, od: 100, ht: 10 },
  { id: 90, od: 100, ht: 12 },
  { id: 90, od: 105, ht: 9 },
  { id: 90, od: 105, ht: 9 },
  { id: 90, od: 105, ht: 10 },
  { id: 90, od: 105, ht: 12 },
  { id: 90, od: 110, ht: 9 },
  { id: 90, od: 110, ht: 12 },
  { id: 90, od: 110, ht: 13 },
  { id: 90, od: 110, ht: 15 },
  { id: 90, od: 115, ht: 9 },
  { id: 90, od: 115, ht: 12 },
  { id: 90, od: 115, ht: 15 },
  { id: 90, od: 120, ht: 10 },
  { id: 90, od: 120, ht: 12 },
  { id: 95, od: 105, ht: 12 },
  { id: 95, od: 110, ht: 9 },
  { id: 95, od: 110, ht: 12 },
  { id: 95, od: 115, ht: 9 },
  { id: 95, od: 115, ht: 12 },
  { id: 95, od: 115, ht: 15 },
  { id: 95, od: 125, ht: 15 },
  { id: 97, od: 105, ht: 13.5 },
  { id: 98, od: 112, ht: 9 },
  { id: 100, od: 108, ht: 10 },
  { id: 100, od: 108, ht: 11.5 },
  { id: 100, od: 110, ht: 8 },
  { id: 100, od: 110, ht: 10 },
  { id: 100, od: 112, ht: 9 },
  { id: 100, od: 115, ht: 9 },
  { id: 100, od: 115, ht: 9 },
  { id: 100, od: 115, ht: 10 },
  { id: 100, od: 115, ht: 12 },
  { id: 100, od: 115, ht: 15 },
  { id: 100, od: 120, ht: 10 },
  { id: 100, od: 120, ht: 12 },
  { id: 100, od: 120, ht: 13 },
  { id: 100, od: 120, ht: 15 },
  { id: 100, od: 125, ht: 9 },
  { id: 100, od: 125, ht: 12 },
  { id: 100, od: 125, ht: 15 },
  { id: 100, od: 130, ht: 12 },
  { id: 105, od: 120, ht: 9 },
  { id: 105, od: 120, ht: 10 },
  { id: 105, od: 120, ht: 12 },
  { id: 105, od: 120, ht: 15 },
  { id: 105, od: 125, ht: 10 },
  { id: 105, od: 125, ht: 12 },
  { id: 105, od: 125, ht: 13 },
  { id: 105, od: 125, ht: 15 },
  { id: 106, od: 120, ht: 8.5 },
  { id: 110, od: 125, ht: 9 },
  { id: 110, od: 125, ht: 10 },
  { id: 110, od: 125, ht: 12 },
  { id: 110, od: 125, ht: 15 },
  { id: 110, od: 130, ht: 10 },
  { id: 110, od: 130, ht: 12 },
  { id: 110, od: 130, ht: 13 },
  { id: 110, od: 130, ht: 15 },
  { id: 110, od: 135, ht: 18 },
  { id: 112, od: 125, ht: 9 },
  { id: 115, od: 125, ht: 12 },
  { id: 115, od: 125, ht: 13 },
  { id: 115, od: 125, ht: 15 },
  { id: 115, od: 130, ht: 9 },
  { id: 115, od: 130, ht: 12 },
  { id: 115, od: 135, ht: 12 },
  { id: 115, od: 135, ht: 13 },
  { id: 115, od: 135, ht: 15 },
  { id: 115, od: 140, ht: 12 },
  { id: 115, od: 140, ht: 15 },
  { id: 118, od: 130, ht: 10 },
  { id: 118, od: 130, ht: 12 },
  { id: 118, od: 133, ht: 9 },
  { id: 118, od: 138, ht: 16 },
  { id: 120, od: 130, ht: 14 },
  { id: 120, od: 135, ht: 9 },
  { id: 120, od: 135, ht: 12 },
  { id: 120, od: 135, ht: 15 },
  { id: 120, od: 140, ht: 10 },
  { id: 120, od: 140, ht: 12 },
  { id: 120, od: 140, ht: 13 },
  { id: 120, od: 140, ht: 15 },
  { id: 120, od: 145, ht: 18 },
  { id: 120, od: 150, ht: 12 },
  { id: 120, od: 150, ht: 15 },
  { id: 120, od: 160, ht: 15 },
  { id: 122, od: 135, ht: 9 },
  { id: 125, od: 135, ht: 13 },
  { id: 125, od: 140, ht: 9 },
  { id: 125, od: 140, ht: 11 },
  { id: 125, od: 140, ht: 12 },
  { id: 125, od: 140, ht: 13 },
  { id: 125, od: 140, ht: 15 },
  { id: 125, od: 145, ht: 10 },
  { id: 125, od: 145, ht: 12 },
  { id: 125, od: 145, ht: 15 },
  { id: 125, od: 150, ht: 13 },
  { id: 125, od: 150, ht: 15 },
  { id: 130, od: 140, ht: 12 },
  { id: 130, od: 140, ht: 13 },
  { id: 130, od: 140, ht: 15 },
  { id: 130, od: 145, ht: 9 },
  { id: 130, od: 145, ht: 15 },
  { id: 130, od: 150, ht: 12 },
  { id: 130, od: 150, ht: 15 },
  { id: 130, od: 152, ht: 15 },
  { id: 130, od: 165, ht: 10 },
  { id: 135, od: 145, ht: 13 },
  { id: 135, od: 150, ht: 9 },
  { id: 135, od: 150, ht: 10 },
  { id: 135, od: 150, ht: 12 },
  { id: 135, od: 150, ht: 15 },
  { id: 135, od: 160, ht: 10 },
  { id: 135, od: 160, ht: 18 },
  { id: 135, od: 165, ht: 15 },
  { id: 136, od: 150, ht: 9 },
  { id: 140, od: 150, ht: 13 },
  { id: 140, od: 155, ht: 9 },
  { id: 140, od: 155, ht: 10 },
  { id: 140, od: 155, ht: 12 },
  { id: 140, od: 155, ht: 13 },
  { id: 140, od: 155, ht: 15 },
  { id: 140, od: 160, ht: 10 },
  { id: 140, od: 160, ht: 12 },
  { id: 140, od: 160, ht: 15 },
  { id: 140, od: 160, ht: 18 },
  { id: 145, od: 160, ht: 9 },
  { id: 145, od: 160, ht: 15 },
  { id: 145, od: 165, ht: 13 },
  { id: 145, od: 165, ht: 15 },
  { id: 150, od: 160, ht: 13 },
  { id: 150, od: 162, ht: 14 },
  { id: 150, od: 165, ht: 9 },
  { id: 150, od: 165, ht: 10 },
  { id: 150, od: 170, ht: 10 },
  { id: 150, od: 170, ht: 12 },
  { id: 150, od: 170, ht: 15 },
  { id: 150, od: 175, ht: 15 },
  { id: 150, od: 180, ht: 12 },
  { id: 150, od: 180, ht: 15 },
  { id: 150, od: 180, ht: 18 },
  { id: 155, od: 165, ht: 13 },
  { id: 155, od: 175, ht: 15 },
  { id: 155, od: 180, ht: 15 },
  { id: 160, od: 175, ht: 9 },
  { id: 160, od: 175, ht: 16 },
  { id: 160, od: 180, ht: 12 },
  { id: 160, od: 180, ht: 15 },
  { id: 160, od: 185, ht: 12 },
  { id: 160, od: 185, ht: 15 },
  { id: 160, od: 185, ht: 16 },
  { id: 160, od: 190, ht: 18.5 },
  { id: 165, od: 180, ht: 9 },
  { id: 165, od: 180, ht: 15 },
  { id: 165, od: 180, ht: 16 },
  { id: 165, od: 185, ht: 15 },
  { id: 165, od: 190, ht: 15 },
  { id: 165, od: 190, ht: 18.5 },
  { id: 170, od: 180, ht: 11 },
  { id: 170, od: 185, ht: 12 },
  { id: 170, od: 190, ht: 10 },
  { id: 170, od: 190, ht: 12 },
  { id: 170, od: 190, ht: 15 },
  { id: 170, od: 195, ht: 15 },
  { id: 170, od: 195, ht: 16 },
  { id: 170, od: 200, ht: 15 },
  { id: 170, od: 200, ht: 18 },
  { id: 175, od: 185, ht: 12 },
  { id: 175, od: 195, ht: 14 },
  { id: 175, od: 200, ht: 15 },
  { id: 175, od: 200, ht: 18 },
  { id: 180, od: 200, ht: 12 },
  { id: 180, od: 200, ht: 12.5 },
  { id: 180, od: 200, ht: 15 },
  { id: 180, od: 205, ht: 15 },
  { id: 180, od: 205, ht: 16 },
  { id: 180, od: 210, ht: 13 },
  { id: 180, od: 210, ht: 15 },
  { id: 185, od: 205, ht: 16 },
  { id: 185, od: 215, ht: 16 },
  { id: 185, od: 220, ht: 15 },
  { id: 190, od: 210, ht: 12 },
  { id: 190, od: 210, ht: 15 },
  { id: 190, od: 215, ht: 15 },
  { id: 190, od: 215, ht: 16 },
  { id: 190, od: 215, ht: 16 },
  { id: 190, od: 220, ht: 15 },
  { id: 195, od: 215, ht: 12 },
  { id: 195, od: 220, ht: 16 },
  { id: 200, od: 220, ht: 12 },
  { id: 200, od: 220, ht: 15 },
  { id: 200, od: 225, ht: 15 },
  { id: 200, od: 225, ht: 16 },
  { id: 204, od: 224, ht: 12 },
  { id: 210, od: 230, ht: 13 },
  { id: 210, od: 230, ht: 16 },
  { id: 210, od: 235, ht: 18 },
  { id: 210, od: 235, ht: 19 },
  { id: 212, od: 237, ht: 19 },
  { id: 220, od: 240, ht: 12 },
  { id: 220, od: 240, ht: 16 },
  { id: 220, od: 245, ht: 18 },
  { id: 224, od: 249, ht: 19 },
  { id: 225, od: 250, ht: 12 },
  { id: 230, od: 250, ht: 12 },
  { id: 230, od: 250, ht: 15 },
  { id: 230, od: 255, ht: 19 },
  { id: 230, od: 260, ht: 18 },
  { id: 235, od: 260, ht: 16 },
  { id: 236, od: 261, ht: 19 },
  { id: 240, od: 260, ht: 12 },
  { id: 240, od: 265, ht: 18 },
  { id: 250, od: 270, ht: 12 },
  { id: 250, od: 275, ht: 19 },
  { id: 250, od: 280, ht: 18 },
  { id: 260, od: 280, ht: 18 },
  { id: 260, od: 290, ht: 18 },
  { id: 265, od: 295, ht: 19 },
  { id: 270, od: 300, ht: 19 },
  { id: 275, od: 310, ht: 15 },
  { id: 280, od: 300, ht: 15 },
  { id: 280, od: 310, ht: 19 },
  { id: 290, od: 320, ht: 18 },
  { id: 300, od: 325, ht: 18 },
  { id: 300, od: 330, ht: 18 },
  { id: 300, od: 340, ht: 20 },
  { id: 305, od: 320, ht: 18 },
  { id: 310, od: 340, ht: 22 },
  { id: 320, od: 350, ht: 20 },
  { id: 330, od: 360, ht: 20 },
  { id: 330, od: 360, ht: 22 },
  { id: 340, od: 370, ht: 22 },
  { id: 345, od: 365, ht: 14 },
  { id: 350, od: 380, ht: 22 },
  { id: 355, od: 385, ht: 22 },
  { id: 360, od: 390, ht: 22 },
  { id: 370, od: 400, ht: 22 },
  { id: 400, od: 430, ht: 19 },
  { id: 400, od: 430, ht: 22 },
  { id: 420, od: 450, ht: 19 },
  { id: 45, od: 55, ht: 6 },
  { id: 60, od: 70, ht: 6 },
];

function RodSeals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(rodSealData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term === "") {
      setFilteredData(rodSealData);
    } else {
      const filtered = rodSealData.filter(
        (item) =>
          item.id.toString().includes(term) ||
          item.od.toString().includes(term) ||
          item.ht.toString().includes(term)
      );
      setFilteredData(filtered);
    }
  };
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                ROD SEALS <span className="text-[#f5b400]">| A2Z SEALS Advance Sealing Technologies</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                We are having an extensive range of profiles U Cup, K21, UHS, UNS, UNR, UN, DNS, DN, DNR, DHS, UHS C, UNS C Seals. Our Imported seals are extremely employed in the market owing to their sturdy nature and fine finish.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={rodSealsImage}
                alt="A2Z SEALS"
                className="h-50 w-auto object-contain"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* About */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            About Rod Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Hydraulic seal are the unsung heroes of fluid power systems and powerful kit. These kits are compact package contain a variety of seals meticulously designed to prevent leakage and ensure smooth operation in hydraulic cylinders and pumps. From O-rings to piston seals, each component plays a crucial role in maintaining system integrity and efficiency. So, the next time you're dealing with hydraulic equipment, remember the importance of a reliable seal kit keeping everything running smoothly.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers of Hydraulic Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Trusted Manufacturers
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((manufacturer) => (
              <span
                key={manufacturer}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {manufacturer}
              </span>
            ))}
          </div>
        </div>

        {/* Seal Kit Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Seal Kit Applications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {sealKitApplications.map((app) => (
              <span
                key={app}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaTools className="text-[#d99600]" />
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose A2Z SEALS
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              A2Z SEALS Seal's Advantage
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sealAdvantages.map((advantage) => (
              <div
                key={advantage}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaShieldAlt className="shrink-0 text-[#d99600]" />
                <span className="text-xs font-bold text-[#061a38]">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hydraulic Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Hydraulic Seals
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hydraulicSealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?product=${encodeURIComponent(type)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{type}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Profiles */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Rod Seal Profiles
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {rodSealProfiles.map((profile) => (
              <span
                key={profile}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {profile}
              </span>
            ))}
          </div>
        </div>

        {/* Rod Seal Dimensions Table */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Rod Seal Dimensions
            </h2>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search by ID, OD, or HT..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 pl-10 text-sm focus:border-[#f5b400] focus:outline-none focus:ring-2 focus:ring-[#f5b400]/20"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-extrabold text-[#061a38]">ITEM</th>
                  <th className="px-4 py-3 text-left font-extrabold text-[#061a38]">ID</th>
                  <th className="px-4 py-3 text-left font-extrabold text-[#061a38]">OD</th>
                  <th className="px-4 py-3 text-left font-extrabold text-[#061a38]">HT</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, 50).map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 font-medium text-[#061a38]">ROD Seals</td>
                    <td className="px-4 py-3 text-slate-600">{item.id}</td>
                    <td className="px-4 py-3 text-slate-600">{item.od}</td>
                    <td className="px-4 py-3 text-slate-600">{item.ht}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredData.length > 50 && (
              <p className="mt-4 text-center text-xs text-slate-500">
                Showing 50 of {filteredData.length} results. Use search to find specific dimensions.
              </p>
            )}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industries We Serve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Rod Seals Used Across Industries
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement Master Hydraulic Cylinder Repair Rebuilt Service Kits comprising of varied types and sized seals used by OEMS, such as Komatsu, Hitachi, Caterpillar, etc. We also offer Hydraulic Cylinder Oil Seal Kit used in industries like, coal, sugar and oil.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Cannot Find Your Rod Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your rod seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <Link
            to="/quote"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Request a Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RodSeals;
