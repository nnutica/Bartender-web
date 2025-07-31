export interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
  specialties: string[];
  experience: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "สมชาย รสดี",
    role: "หัวหน้าทีมพัฒนาสูตร",
    description: "ผู้เชี่ยวชาญด้านเหล้าไทยและเครื่องดื่มผสมมากว่า 15 ปี",
    avatar: "👨‍🍳",
    specialties: ["เหล้าไทยแท้", "สูตรดั้งเดิม", "การผสมผสาน"],
    experience: "15+ ปี"
  },
  {
    id: 2,
    name: "สุดา หอมหวาน",
    role: "นักสร้างสรรค์รสชาติ",
    description: "ผู้เชี่ยวชาญด้านผลไม้ไทยและสมุนไพรเพื่อการผสมเครื่องดื่ม",
    avatar: "👩‍🔬",
    specialties: ["ผลไม้ไทย", "สมุนไพร", "รสชาติธรรมชาติ"],
    experience: "12+ ปี"
  },
  {
    id: 3,
    name: "อรุณ เครื่องเทศ",
    role: "ผู้เชี่ยวชาญเครื่องเทศ",
    description: "ผู้รู้เรื่องเครื่องเทศไทยและการใช้ประกอบเครื่องดื่ม",
    avatar: "👨‍🌾",
    specialties: ["เครื่องเทศไทย", "สมุนไพรท้องถิ่น", "การคัดสรร"],
    experience: "20+ ปี"
  },
  {
    id: 4,
    name: "มณี สดใส",
    role: "ผู้จัดการคุณภาพ",
    description: "รับผิดชอบการควบคุมคุณภาพและความปลอดภัยของผลิตภัณฑ์",
    avatar: "👩‍💼",
    specialties: ["ควบคุมคุณภาพ", "ความปลอดภัย", "มาตรฐาน"],
    experience: "10+ ปี"
  },
  {
    id: 5,
    name: "ประยุทธ์ ชิมชม",
    role: "ผู้ทดสอบรสชาติ",
    description: "ผู้เชี่ยวชาญด้านการชิมและประเมินรสชาติเครื่องดื่ม",
    avatar: "👨‍🍳",
    specialties: ["ชิมรสชาติ", "ประเมินคุณภาพ", "พัฒนาสูตร"],
    experience: "8+ ปี"
  },
  {
    id: 6,
    name: "วรรณา สร้างสรรค์",
    role: "ผู้จัดการการตลาด",
    description: "รับผิดชอบการนำเสนอและการตลาดของเครื่องดื่ม",
    avatar: "👩‍💻",
    specialties: ["การตลาด", "การนำเสนอ", "ยุทธศาสตร์"],
    experience: "7+ ปี"
  }
];