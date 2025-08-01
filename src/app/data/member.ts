export interface Member {
  id: number;
  name: string;
  studentID: string;
  role: string;
  image: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "สมชาย รสดี",
    studentID: "65110001",
    role: "หัวหน้าทีมพัฒนาสูตร",
    image: "/team/member1.svg"
  },
  {
    id: 2,
    name: "สุดา หอมหวาน",
    studentID: "65110002",
    role: "นักสร้างสรรค์รสชาติ",
    image: "/team/member2.svg"
  },
  {
    id: 3,
    name: "อรุณ เครื่องเทศ",
    studentID: "65110003",
    role: "ผู้เชี่ยวชาญเครื่องเทศ",
    image: "/team/member3.svg"
  },
  {
    id: 4,
    name: "มณี สดใส",
    studentID: "65110004",
    role: "ผู้จัดการคุณภาพ",
    image: "/team/member4.svg"
  },
  {
    id: 5,
    name: "ประยุทธ์ ชิมชม",
    studentID: "65110005",
    role: "ผู้ทดสอบรสชาติ",
    image: "/team/member5.svg"
  },
  {
    id: 6,
    name: "วรรณา สร้างสรรค์",
    studentID: "65110006",
    role: "ผู้จัดการการตลาด",
    image: "/team/member6.svg"
  }
];