function sortUsersByName(users) {
  // Sắp xếp mảng users
  return users.sort((userA, userB) => {
    const nameA = userA.fullName.split(" ").pop();
    const nameB = userB.fullName.split(" ").pop();

    // Lấy họ và tên đệm (toàn bộ trừ từ cuối)
    const lastNameA = userA.fullName.split(" ").slice(0, -1).join(" ");
    const lastNameB = userB.fullName.split(" ").slice(0, -1).join(" ");

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });
}

const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];

console.log(sortUsersByName(users));
