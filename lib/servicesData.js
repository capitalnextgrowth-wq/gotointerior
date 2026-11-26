// Single source of truth for every service.
// `items` are the individual products shown as chips on the services page.
// `id` is the anchor: each service links to /services#<id>
// Put your own photos in /public/services/ (or swap in any URL).
export const services = [
  {
    id: "wallpaper",
    items: ["Wallpaper Roll", "Customised Wallpaper", "Self Adhesive Wallpaper", "Gold Foil Wallpaper", "Embossed Wallpaper"],
    title: "Wallpaper & Customised Wallpaper",
    description:
      "Rolls, self-adhesive, gold foil and embossed wallpaper, or a custom print made just for your wall.",
    image: "/services/wallpaper.jpg",
    label: "Wallpaper",
  },
  {
    id: "curtains-blinds",
    items: ["Curtain", "Sheer Curtain", "Roller Blinds", "Roman Blinds", "Zebra Blinds", "Customised Roller Blinds", "Customised Roman Blinds", "Customised Zebra Blinds", "Venetian Blind"],
    title: "Curtains & Blinds with Customization",
    description:
      "Made-to-measure curtains and blinds in the fabrics, colours and styles you choose, fitted neatly to every window.",
    image: "https://images.pexels.com/photos/34350950/pexels-photo-34350950.jpeg",
    label: "Curtains & Blinds",
  },
  {
    id: "glass-film",
    items: ["Glass Film", "Customised Film"],
    title: "Glass Film with Customization",
    description:
      "Frosted, decorative and privacy films cut to your design, adding style, shade and privacy to glass.",
    image: "https://images.pexels.com/photos/17572159/pexels-photo-17572159.jpeg",
    label: "Glass Film",
  },
  {
    id: "sofa-chairs",
    items: ["Sofa", "Sofa Fabric", "Chairs"],
    title: "Customized Sofa, Chairs & Sofa Fabric",
    description:
      "Sofas and chairs built to your size, shape and upholstery, with a wide choice of sofa fabrics.",
    image: "https://images.pexels.com/photos/38084669/pexels-photo-38084669.jpeg",
    label: "Sofa & Chairs",
  },
  {
    id: "bed-back-quilting",
    items: [],
    title: "Bed Back Quilting",
    description:
      "Soft, quilted bed backs in your choice of fabric and pattern for a cosy, finished bedroom.",
    image: "/services/bed-back-quilting.jpg",
    label: "Bed Back Quilting",
  },
  {
    id: "pvc-louvers",
    items: ["PVC Panels", "Fluted Panels", "WPC Panels", "Louvers"],
    title: "PVC, Fluted & WPC Panels",
    description:
      "Durable, easy-to-clean PVC, fluted and WPC panels and louvers for walls, ceilings and partitions.",
    image: "https://images.pexels.com/photos/36841745/pexels-photo-36841745.jpeg",
    label: "PVC & Louvers",
  },
  {
    id: "vecta-charcoal",
    items: ["Charcoal Panels", "Vectra Panels", "MDF Panels"],
    title: "Vecta Panels, MDF & Charcoal Sheets",
    description:
      "Modern wall panels and charcoal sheets that bring texture, warmth and a premium finish to any wall.",
    image: "https://images.pexels.com/photos/36499215/pexels-photo-36499215.jpeg",
    label: "Wall Panels",
  },
  {
    id: "uv-dmd-3d",
    items: ["UV Marble Sheet", "7D UV Marble Sheet"],
    title: "UV Marble Sheets & 7D UV Sheets",
    description:
      "Glossy UV marble and 7D UV sheets for bold, easy-to-maintain feature walls and cabinetry.",
    image: "https://images.pexels.com/photos/36567384/pexels-photo-36567384.png",
    label: "UV Sheets",
  },
  {
    id: "mosaic-foam",
    items: ["Mosaic Tiles", "Foam Sheet"],
    title: "Mosaic Tiles & Foam Sheets",
    description:
      "Mosaic tiles and soft foam sheets that add pattern, colour and depth to accent walls and backsplashes.",
    image: "https://images.pexels.com/photos/7147292/pexels-photo-7147292.jpeg",
    label: "Mosaic & Foam",
  },
  {
    id: "3d-sheets",
    items: [],
    title: "3D Sheets",
    description:
      "Textured 3D wall sheets that create depth and a sculpted look, installed quickly with a clean finish.",
    image: "https://images.pexels.com/photos/6143347/pexels-photo-6143347.jpeg",
    label: "3D Sheets",
  },
  {
    id: "false-ceiling",
    items: ["POP Ceiling", "Gypsum Ceiling", "PVC Ceiling", "Fluted Ceiling", "WPC Ceiling", "Wooden Ceiling"],
    title: "False Ceiling",
    description:
      "POP, gypsum, PVC, fluted, WPC and wooden ceilings with clean lines and built-in lighting options.",
    image: "/services/false-ceiling.jpg",
    label: "False Ceiling",
  },
  {
    id: "flooring",
    items: ["Roll Flooring", "Wooden Flooring", "SPC Flooring", "Hospital Flooring", "Commercial Flooring", "School Flooring", "Office Flooring", "Gym Flooring", "Vinyl Flooring"],
    title: "Complete Flooring",
    description:
      "Wooden, SPC, vinyl and roll flooring for homes, offices, schools, gyms and hospitals, from selection to installation.",
    image: "https://images.pexels.com/photos/6207950/pexels-photo-6207950.jpeg",
    label: "Flooring",
  },
  {
    id: "carpet",
    items: ["Tile Carpet", "Roll Carpet"],
    title: "Tile Carpet & Roll Carpet",
    description:
      "Carpet tiles and rolls in a range of colours and textures, easy to fit and easy to replace.",
    image: "/services/carpet.jpg",
    label: "Carpet",
  },
  {
    id: "grass-garden",
    items: ["Green Grass 20mm", "Green Grass 25mm", "Green Grass 30mm", "Green Grass 35mm", "Green Grass 40mm", "Green Grass 45mm", "Green Grass 50mm", "Green Grass 55mm", "Natural Flooring", "Vertical Garden Tile"],
    title: "Artificial Grass & Vertical Garden",
    description:
      "Artificial grass from 20mm to 55mm, natural flooring and vertical garden tiles that bring greenery without upkeep.",
    image: "https://images.pexels.com/photos/32103583/pexels-photo-32103583.jpeg",
    label: "Greenery",
  },
  {
    id: "decor",
    items: ["Paintings", "Wall Clocks", "Table Decor"],
    title: "Paintings, Clocks & Table Decor",
    description:
      "Paintings, wall clocks and table decor to finish a room with personality and the details that make it feel complete.",
    image: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg",
    label: "Decor",
  },
];

export const serviceHref = (id) => `/services#${id}`;