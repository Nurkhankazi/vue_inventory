import http from "../http-common";

class DataService {
  login(data) {
    return http.post("/login", data);
  }
  saveExpense(data) {
    return http.post("/expense/create", data);
  }
  getExpense() {
    return http.get(`/expense`);
  }
  saveAccountHead(data) {
    return http.post("/account_head/create", data);
  }
  getAccountHead() {
    return http.get("/account_head");
  }
    
  getExpenseReport() {
    return http.get("/expense_report");
  }
  // ordertrack(uid) {
  //   return http.get(`/ordertrack/${uid}`);
  // }
  // ordertrack_save(data) {
  //   return http.post("/ordertrack_save", data);
  // }
  // doctor(dept) {
  //   return http.get(`/doctor/${dept}`);
  // }
  // getAll(uid) {
  //   return http.get(`/booking/${uid}`);
  // }

  // get(id) {
  //   return http.get(`/booking_single/${id}`);
  // }
  // student_details(id) {
  //   return http.get(`/student_details/${id}`);
  // }

  // login(data) {
  //   return http.post("/student_login", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }



  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();