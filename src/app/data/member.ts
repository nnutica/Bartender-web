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
    name: "พิมลรัตน์ วิกยานนท์",
    studentID: "1650210378",
    role: "หัวหน้าทีมพัฒนาสูตร",
    image: "/team/member1.jpg"
  },
  {
    id: 2,
    name: "โสรญารัตน์ ภูไชยลิ้นฟ้า",
    studentID: "1650315383",
    role: "นักสร้างสรรค์รสชาติ",
    image: "/team/member2.jpg"
  },
  {
    id: 3,
    name: "หรรษธร เกษียร",
    studentID: "1650700964",
    role: "ผู้เชี่ยวชาญเครื่องเทศ",
    image: "/team/member3.jpg"
  },
  {
    id: 4,
    name: "บุญสวัสดิ์ แฝดกลาง",
    studentID: "1650701467",
    role: "ผู้จัดการคุณภาพ",
    image: "/team/member4.jpg"
  },
  {
    id: 5,
    name: "นิตินัทธ์ ล้ออุทัย",
    studentID: "1650703596",
    role: "ผู้ทดสอบรสชาติ",
    image: "/team/member5.jpg"
  },
  {
    id: 6,
    name: "อมาวสุ ด้วงอินทร์",
    studentID: "1650704404",
    role: "ผู้จัดการการตลาด",
    image: "/team/member6.jpg"
  },
  {
    id: 7,
    name: "ธนากร สุริยะรังษี",
    studentID: "1660309467",
    role: "ผู้จัดการการตลาด",
    image: "/team/member7.jpg"
  },
  {
    id: 8,
    name: "อดิศัย ใจชื่น",
    studentID: "1660901446",
    role: "ผู้จัดการการตลาด",
    image: "/team/member8.jpg"
  },
  {
    id: 9,
    name: "ปริวัฒน์ ทิมกลั่น",
    studentID: "1671201034",
    role: "ผู้จัดการการตลาด",
    image: "/team/member9.jpg"
  }
];