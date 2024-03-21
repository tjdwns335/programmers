function solution(n, lost, reserve) {
  let lost_student = lost.filter((l) => !reserve.includes(l)).sort();
  let reserve_student = reserve.filter((r) => !lost.includes(r)).sort();

  for (let i = 0; i < reserve_student.length; i++) {
    if (lost_student.includes(reserve_student[i] - 1)) {
      lost_student = lost_student.filter((l) => l !== reserve_student[i] - 1);
    } else if (lost_student.includes(reserve_student[i] + 1)) {
      lost_student = lost_student.filter((l) => l !== reserve_student[i] + 1);
    }
  }
  return n - lost_student.length;
}